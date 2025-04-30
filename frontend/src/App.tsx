import Form from './components/Form/Form'
import Caroussel from './components/Caroussel/Caroussel'
import './App.scss'




function App() {

	return (
		<>
			<header>
				<div className="icon">
					<img src="./src/assets/logo.png" alt="logo" />
				</div>
			</header>
			<main className="background">
				<div className="overlay">
					<section className="left">
						<div className="text-content">
							<h1>Manage your Money anywhere</h1>
							<p>View all the analytics and grow your business from anywhere!</p>
						</div>

						<Caroussel />
					</section>
					<aside className="right">
					<Form />

					</aside>
				</div>
			</main>
		</>
	)
}

export default App
