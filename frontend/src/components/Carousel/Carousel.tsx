import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '13%', // adjust this for how much of the next slide shows
		arrows: false
	};


	const cards = [
		{ id: 1, text: 'Card 1' },
		{ id: 2, text: 'Card 2' },
		{ id: 3, text: 'Card 3' },
		{ id: 4, text: 'Card 4' }
	];

	return (

		<div className="carousel">
			<div className="carousel-wrapper">
				<Slider {...settings}>
					<div className="carousel-card">
						<p>This analytics platform is a game-changer! It's easy to use, provides valuable insights, and has helped me make smarter business decisions. I highly recommend it</p>
						<div className="profile">
							<div className="img">
								<img src="https://placehold.co/40" alt="profile picture" />
							</div>
							<div className="text">
								<p className="name">Casey Bachmeyer</p>
								<p className="role">Founder, Sisyphus Ventures</p>
							</div>
						</div>
					</div>


					<div className="carousel-card">
						<p>The customer support team is outstanding! They were quick to respond and resolved my issue in no time. I couldn't be happier with the service.</p>
						<div className="profile">
							<div className="img">
								<img src="https://placehold.co/40" alt="profile picture" />
							</div>
							<div className="text">
								<p className="name">Alex Johnson</p>
								<p className="role">CEO, TechWave</p>
							</div>
						</div>
					</div>
					<div className="carousel-card">
						<p>I've tried many platforms, but this one stands out. The features are intuitive, and the performance is unmatched. Highly recommended for professionals.</p>
						<div className="profile">
							<div className="img">
								<img src="https://placehold.co/40" alt="profile picture" />
							</div>
							<div className="text">
								<p className="name">Jamie Lee</p>
								<p className="role">Product Manager, Innovate Inc.</p>
							</div>
						</div>
					</div>
					<div className="carousel-card">
						<p>Using this platform has been a breeze. The design is sleek, and the functionality is exactly what I needed. It's a must-have tool for any business.</p>
						<div className="profile">
							<div className="img">
								<img src="https://placehold.co/40" alt="profile picture" />
							</div>
							<div className="text">
								<p className="name">Taylor Smith</p>
								<p className="role">Marketing Director, Bright Ideas Co.</p>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default Carousel;
