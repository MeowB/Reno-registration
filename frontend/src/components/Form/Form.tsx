import MerchantForm from "./MerchantForm"
import AgentForm from "./AgentForm"
import LoginForm from "./LoginForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUser, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import './Form.scss'

const Form = () => {
	let content;
	const [whichForm, setWhichForm] = useState<string>('merchant')

	switch (whichForm) {
		case 'merchant':
			content = <MerchantForm />
			break
		case 'agent':
			content = <AgentForm />
			break
		case 'login':
			content = <LoginForm />
			break
		default:
			content = 'merchant'
	}


	return (
		<div className="form">
			{
				whichForm && whichForm != 'login' ? (
					<>
						<div className="title">
							<h2>Create an accout</h2>
							<div className="buttons">
								<button className={`${whichForm === 'merchant' ? 'active' : ''}`} onClick={() => setWhichForm('merchant')}> <FontAwesomeIcon icon={faBriefcase} /> Merchant</button>
								<button className={`${whichForm === 'agent' ? 'active' : ''}`} onClick={() => setWhichForm('agent')}> <FontAwesomeIcon icon={faUser} /> Agent</button>
							</div>
						</div>
					</>
				) : (
					<>
						<div className="title">
							<h2>Log In</h2>
						</div>
					</>
				)
			}
			{content}

			<div className="bottom">
				<p>
					{
						whichForm === 'login'
							? "Don't have an account? "
							: "Already have an account? "
					}
				</p>
				{
					whichForm === 'login'
						? <button onClick={() => setWhichForm('merchant')}> <FontAwesomeIcon icon={faBriefcase} /> Create an Account</button>
						: <button onClick={() => setWhichForm('login')}> <FontAwesomeIcon icon={faArrowRightToBracket} /> Log In</button>
				}

			</div>
		</div>
	)
}

export default Form
