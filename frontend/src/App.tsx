import Form from './components/Form/Form'
import Carousel from './components/Carousel/Carousel'
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
					<section className="content">
						<div className="text-content">
							<h1>Manage your Money <br />anywhere</h1>
							<p>View all the analytics and grow your business <br /> from anywhere!</p>
						</div>
						<div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
							<Carousel />
						</div>
					</section>
					<aside className="login">
						<Form />

					</aside>
				</div>
			</main>
		</>
	)
}

export default App
