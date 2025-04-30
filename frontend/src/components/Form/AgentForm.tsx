const AgentForm = () => {
	return (
		<form action="POST">
			<div className="form-group">
				<input type="text" id="firstName" name="firstName" placeholder="First Name" required />
			</div>
			<div className="form-group">
				<input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
			</div>
			<div className="form-group">
				<input type="email" id="email" name="email" placeholder="Enter your email" required />
			</div>
			<div className="form-group">
				<select id="region" name="region" required>
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
				<input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required />
			</div>
			<div className="form-group">
				<input type="password" id="password" name="password" placeholder="Create a password" required />
			</div>
			<div className="form-group checkbox">
				<label>
					<input type="checkbox" id="acceptPrivacy" name="acceptPrivacy" required />
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
