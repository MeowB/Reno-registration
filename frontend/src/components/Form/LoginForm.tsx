import axios from "axios"
import { FormEvent, useState } from "react"

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {

		} catch (error) {
			
		}
	}

	return (
		<div>
			<form action="POST">
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
