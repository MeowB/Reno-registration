import axios from "axios"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify";

const LoginForm = () => {
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!validateForm()) return

		try {
			const res = await axios.post('/api/login', formData)
			console.log(res.data)
			toast.success('Login succesfull')
		} catch (error) {
			console.error('Error loging in: ', error)
			toast.error('Error loging in user')
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;

		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? (checked as boolean) : value,
		}));
	};

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}

		if (!formData.password.trim()) newErrors.password = 'Password is required'

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}
	return (
		<div>
			<form action="POST" onSubmit={handleLogin}>
				<div className="form-group">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
						style={errors.email ? { border: '1px solid red' } : {}}
					/>
					{errors.email && (<p className="error">{errors.email}</p>)}
				</div>
				<div className="form-group">
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						onChange={handleChange}
						style={errors.password ? { border: '1px solid red' } : {}}
					/>
					{errors.password && (<p className="error">{errors.password}</p>)}
				</div>
				<div className="form-group">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	)
}

export default LoginForm
