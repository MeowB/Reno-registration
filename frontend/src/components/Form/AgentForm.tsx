import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const AgentForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		region: '',
		phoneNumber: '',
		password: '',
		acceptPrivacy: false,
	})

	const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const res = await axios.post('/api/register/agent', formData)
			console.log(res.data)
			toast.success('Registration successful!')

		} catch (error) {
			console.error('Error posting user: ', error)
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

	return (
		<form action="POST" onSubmit={handleRegister}>
			<div className="form-group">
				<input type="text" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
			</div>
			<div className="form-group">
				<input type="text" id="lastName" name="lastName" placeholder="Last Name"   value={formData.lastName} onChange={handleChange} required />
			</div>
			<div className="form-group">
				<input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}required />
			</div>
			<div className="form-group">
				<select id="region" name="region" value={formData.region} onChange={handleChange} required>
					<option value="">Select your region</option>
					<option value="north-america">North America</option>
					<option value="europe">Europe</option>
					<option value="asia">Asia</option>
					<option value="africa">Africa</option>
					<option value="oceania">Oceania</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div className="form-group">
				<input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
			</div>
			<div className="form-group">
				<input type="password" id="password" name="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required />
			</div>
			<div className="form-group checkbox">
				<label>
					<input type="checkbox" id="acceptPrivacy" name="acceptPrivacy" checked={formData.acceptPrivacy} onChange={handleChange} required />
					I accept the privacy policy
				</label>
			</div>
			<div className="form-group">
				<button type="submit">Sign Up as Agent</button>
			</div>
		</form>

	)
}

export default AgentForm
