import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const MerchantForm = () => {
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
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

		if (!validateForm()) return

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

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'

		if (!formData.companyLocation.trim()) newErrors.companyLocation = 'Location is required'

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}

		if (!formData.industry.trim()) newErrors.industry = 'Industry is required'

		if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required'
		
		if (!formData.password.trim()) newErrors.password = 'Password is required'

		if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'You must accept the privacy policy'


		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	return (
		<form action="POST" onSubmit={(e) => handleRegister(e)}>
			<div className="form-group">
				<input
					type="text"
					id="firstName"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
					style={errors.firstName ? { border: '1px solid red' } : {}}
				/>
				{errors.firstName && (<p className="error">{errors.firstName}</p>)}
			</div>
			<div className="form-group">
				<select
					id="companyLocation"
					name="companyLocation"
					value={formData.companyLocation}
					onChange={handleChange}
					style={errors.companyLocation ? { border: '1px solid red' } : {}}
				>
					<option value="">Where is your company based?</option>
					<option value="us">United States</option>
					<option value="uk">United Kingdom</option>
					<option value="ca">Canada</option>
					<option value="au">Australia</option>
					<option value="other">Other</option>
				</select>
				{errors.companyLocation && (<p className="error">{errors.companyLocation}</p>)}
			</div>
			<div className="form-group">
				<input
					type="email"
					id="businessEmail"
					name="email"
					placeholder="Business Email"
					value={formData.email}
					onChange={handleChange}
					style={errors.email ? { border: '1px solid red' } : {}}
				/>
				{errors.email && (<p className="error">{errors.email}</p>)}
			</div>
			<div className="form-group">
				<select
					id="industry"
					name="industry"
					value={formData.industry}
					onChange={handleChange}
					style={errors.industry ? { border: '1px solid red' } : {}}
				>
					<option value="">Industry</option>
					<option value="tech">Technology</option>
					<option value="finance">Finance</option>
					<option value="healthcare">Healthcare</option>
					<option value="retail">Retail</option>
					<option value="other">Other</option>
				</select>
				{errors.industry && (<p className="error">{errors.industry}</p>)}
			</div>
			<div className="form-group">
				<input
					type="tel"
					id="phoneNumber"
					name="phoneNumber"
					placeholder="Phone Number"
					value={formData.phoneNumber}
					onChange={handleChange}
					style={errors.phoneNumber ? { border: '1px solid red' } : {}}
					/>
					{errors.phoneNumber && (<p className="error">{errors.phoneNumber}</p>)}
			</div>
			<div className="form-group">
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleChange}
					style={errors.password ? { border: '1px solid red' } : {}}
					/>
					{errors.password && (<p className="error">{errors.password}</p>)}
			</div>
			<div className="form-group checkbox">
				<label>
					<input type="checkbox" id="acceptPrivacy" name="acceptPrivacy" checked={formData.acceptPrivacy} onChange={handleChange} />
					<p>I accept the <strong>Privacy Policy</strong></p>
				</label>
				{errors.acceptPrivacy && (<p className="error">{errors.acceptPrivacy}</p>)}
			</div>
			<div className="form-group">
				<button type="submit">Create an Account</button>
			</div>
		</form>
	)
}

export default MerchantForm
