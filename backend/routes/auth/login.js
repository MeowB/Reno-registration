import express from 'express'
import db from '../../db/db.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv/config'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/login', (req, res) => {
	const { email, password } = req.body

	if(!email || !password) {
		return res.status(400).json({ error: 'Missing email or password' })
	}

	const query = `SELECT * FROM users WHERE email = ?`

	db.get(query, [email], async (err, user) => {
		try {
			if (err) {
				console.error('DB error during login: ', err.message)
				return res.status(500).json({ error: 'Database error' })
			}

			if (!user) {
				return res.status(401).json({ error: 'Invalid username'})
			}
	
			const isMatch = await bcrypt.compare(password, user.password)

			if (!isMatch) {
				return res.status(400).json({ error: 'Invalid password'})
			}

			const token = jwt.sign(
				{ id: user.id, email: user.email },
				process.env.JWT_SECRET,
				{ expiresIn: '1h' }
			)

			res.status(200).json({
				message: 'Login successful',
				user: {
					id: user.id,
					email: user.email,
					role: user.role
				},
				token: token
			})
			
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error'})
		}
	})
})

export default router