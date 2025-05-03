import express from 'express'
import db from '../../../db/db.js'
import bcrypt from 'bcrypt'
const saltRounds = 9

const router = express.Router()

router.post('/register/merchant', async (req, res) => {
	const {
		firstName,
		companyLocation,
		email,
		industry,
		phoneNumber,
		password
	} = req.body;

	if (!email || !password || !firstName) {
		return res.status(400).json({ error: 'Missing required fields' })
	}

	try {
		const hashedPassword = await bcrypt.hash(password, saltRounds)


		const userQuery = `INSERT INTO users (email, password, role) VALUES (?, ?, 'merchant')`
		db.run(userQuery, [email, hashedPassword], function (err) {
			if (err) {
				console.error('Error inserting into users: ', err.message)
				return res.status(400).json({ error: 'Email already in use or user insert failed' })
			}

			const userId = this.lastID

			const profileQuery = `
      		INSERT INTO merchant_profiles (user_id, first_name, company_location, business_email, industry, phone_number)
   	 	  	VALUES (?, ?, ?, ?, ?, ?)
    	`;

			db.run(
				profileQuery,
				[userId, firstName, companyLocation, email, industry, phoneNumber],
				(err) => {
					if (err) {
						console.error('Error inserting into merchant_profiles: ', err.message)
						return res.status(500).json({ error: 'Failed to create merchant profile' })
					}

					res.status(201).json({ message: 'Merchant registered successfully' })
				}
			)
		})

	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}

})


export default router