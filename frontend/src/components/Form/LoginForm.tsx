import axios from "axios"
import { FormEvent, useState } from "react"

const LoginForm = () => {

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget
		const formData = new FormData(form)

		const email = formData.get('email') as string
		const password = formData.get('password') as string

		try {
			const res = await axios.post('/api/login', { email, password })
			console.log(res.data)

		} catch (error) {
			console.error('Error loging in: ', error)
		}
	}

	return (
		<div>
			<form action="POST" onSubmit={handleLogin}>
				<div className="form-group">
					<input type="email" id="email" name="email" placeholder="Email" required />
				</div>
				<div className="form-group">
					<input type="password" id="password" name="password" placeholder="Password" required />
				</div>
				<div className="form-group">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	)
}

export default LoginForm
