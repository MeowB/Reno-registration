import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import zxcvbn from 'zxcvbn'

const AgentForm = () => {
	const [passwordStrength, setPasswordStrength] = useState<number>(0)
	const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
	const strengthColors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#27ae60'];

	const [errors, setErrors] = useState<{ [key: string]: string }>({});
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

		if (!validateForm()) return

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

		if (name === 'password') {
			const { score } = zxcvbn(value)
			setPasswordStrength(score)
		}

		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? (checked as boolean) : value,
		}));
	};

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'

		if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}

		if (!formData.region.trim()) newErrors.region = 'Region is required'

		if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required'

		if (!formData.password.trim()) newErrors.password = 'Password is required'

		if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'You must accept the privacy policy'


		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	return (
		<form action="POST" onSubmit={handleRegister}>
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
				<input
					type="text"
					id="lastName"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={handleChange}
					style={errors.lastName ? { border: '1px solid red' } : {}}
				/>
				{errors.lastName && (<p className="error">{errors.lastName}</p>)}
			</div>
			<div className="form-group">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email"
					value={formData.email}
					onChange={handleChange}
					style={errors.email ? { border: '1px solid red' } : {}}
				/>
				{errors.email && (<p className="error">{errors.email}</p>)}
			</div>
			<div className="form-group">
				<select
					id="region"
					name="region"
					value={formData.region}
					onChange={handleChange}
					style={errors.region ? { border: '1px solid red' } : {}}
				>
					<option value="">Select your region</option>
					<option value="north-america">North America</option>
					<option value="europe">Europe</option>
					<option value="asia">Asia</option>
					<option value="africa">Africa</option>
					<option value="oceania">Oceania</option>
					<option value="other">Other</option>
				</select>
				{errors.region && (<p className="error">{errors.region}</p>)}
			</div>
			<div className="form-group">
				<input
					type="tel"
					id="phoneNumber"
					name="phoneNumber"
					placeholder="Enter your phone number"
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
					placeholder="Create a password"
					value={formData.password}
					onChange={handleChange}
					style={errors.password ? { border: '1px solid red' } : {}}
				/>

				{formData.password && (
					<div style={{ marginTop: '6px' }}>
						<div
							style={{
								height: '8px',
								width: '100%',
								backgroundColor: '#ddd',
								borderRadius: '4px',
								overflow: 'hidden',
								marginBottom: '4px',
							}}
						>
							<div
								style={{
									height: '100%',
									width: `${(passwordStrength + 1) * 20}%`,
									backgroundColor: strengthColors[passwordStrength],
									transition: 'width 0.3s ease',
								}}
							/>
						</div>
						<p
							style={{
								color: strengthColors[passwordStrength],
								fontSize: '0.85rem',
								fontWeight: 600,
							}}
						>
							{strengthLabels[passwordStrength]} Password
						</p>
					</div>
				)}
				
				{errors.password && (<p className="error">{errors.password}</p>)}
			</div>
			<div className="form-group checkbox">
				<label>
					<input type="checkbox" id="acceptPrivacy" name="acceptPrivacy" checked={formData.acceptPrivacy} onChange={handleChange} />
					I accept the privacy policy
				</label>
				{errors.acceptPrivacy && (<p className="error">{errors.acceptPrivacy}</p>)}
			</div>
			<div className="form-group">
				<button type="submit">Sign Up as Agent</button>
			</div>
		</form>

	)
}

export default AgentForm
