import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const MerchantForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		companyLocation: '',
		email: '',
		industry: '',
		phoneNumber: '',
		password: '',
		acceptPrivacy: false,
	})

	const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const res = await axios.post('/api/register/merchant', formData)
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
		<form action="POST" onSubmit={(e) => handleRegister(e)}>
			<div className="form-group">
				<input type="text" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
			</div>
			<div className="form-group">
				<select id="companyLocation" name="companyLocation" value={formData.companyLocation} onChange={handleChange} required>
					<option value="">Where is your company based?</option>
					<option value="us">United States</option>
					<option value="uk">United Kingdom</option>
					<option value="ca">Canada</option>
					<option value="au">Australia</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div className="form-group">
				<input type="email" id="businessEmail" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} required />
			</div>
			<div className="form-group">
				<select id="industry" name="industry" value={formData.industry} onChange={handleChange} required>
					<option value="">Industry</option>
					<option value="tech">Technology</option>
					<option value="finance">Finance</option>
					<option value="healthcare">Healthcare</option>
					<option value="retail">Retail</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div className="form-group">
				<input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
			</div>
			<div className="form-group">
				<input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
			</div>
			<div className="form-group checkbox">
				<label>
					<input type="checkbox" id="acceptPrivacy" name="acceptPrivacy" checked={formData.acceptPrivacy} onChange={handleChange} required />
					<p>I accept the <strong>Privacy Policy</strong></p>
				</label>
			</div>
			<div className="form-group">
				<button type="submit">Create an Account</button>
			</div>
		</form>
	)
}

export default MerchantForm
