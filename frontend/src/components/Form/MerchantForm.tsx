const MerchantForm = () => {
	return (
		<form action="POST">
			<div className="form-group">
				<input type="text" id="firstName" name="firstName" placeholder="First Name" required />
			</div>
			<div className="form-group">
				<select id="companyLocation" name="companyLocation" required>
					<option value="">Where is your company based?</option>
					<option value="us">United States</option>
					<option value="uk">United Kingdom</option>
					<option value="ca">Canada</option>
					<option value="au">Australia</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div className="form-group">
				<input type="email" id="businessEmail" name="businessEmail" placeholder="Business Email" required />
			</div>
			<div className="form-group">
				<select id="industry" name="industry" required>
					<option value="">Industry</option>
					<option value="tech">Technology</option>
					<option value="finance">Finance</option>
					<option value="healthcare">Healthcare</option>
					<option value="retail">Retail</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div className="form-group">
				<input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required />
			</div>
			<div className="form-group">
				<input type="password" id="password" name="password" placeholder="Password" required />
			</div>
			<div className="form-group checkbox">
				<label>
					<input type="checkbox" id="acceptPrivacy" name="acceptPrivacy" required />
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
