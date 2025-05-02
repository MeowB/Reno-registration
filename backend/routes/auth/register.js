import express from 'express'
import db from '../../db/db.js'
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

router.post('/register/agent', async (req, res) => {
	const {
		email,
		password,
		firstName,
		lastName,
		region,
		phoneNumber
	} = req.body;

	// Basic validation
	if (!email || !password || !firstName) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	try {
		const hashedPassword = await bcrypt.hash(password, saltRounds)
		console.log(hashedPassword)

		// Step 1: Insert into users
		const userQuery = `INSERT INTO users (email, password, role) VALUES (?, ?, 'agent')`;

		db.run(userQuery, [email, hashedPassword], function (err) {
			if (err) {
				console.error('Error inserting into users:', err.message);
				return res.status(400).json({ error: 'Email already in use or user insert failed' });
			}

			const userId = this.lastID;

			// Step 2: Insert into agent_profiles
			const profileQuery = `
		INSERT INTO agent_profiles (user_id, first_name, last_name, region, phone_number)
		VALUES (?, ?, ?, ?, ?)
	  `;

			db.run(
				profileQuery,
				[userId, firstName, lastName, region, phoneNumber],
				(err) => {
					if (err) {
						console.error('Error inserting into agent_profiles:', err.message);
						return res.status(500).json({ error: 'Failed to create agent profile' });
					}

					res.status(201).json({ message: 'Agent registered successfully' });
				}
			);
		});
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}

});


export default router