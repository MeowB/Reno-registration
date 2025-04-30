const LoginForm = () => {
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
