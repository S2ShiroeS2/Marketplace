import "./style.css";
import { DATA_RENDER_STRUCTURE } from "../constants";
import { Menu } from "../components";
import { SYMBOLIC_IMAGE, VECTOR_IMAGE } from "../assets";

const Home = () => {
	const { groupSquare, groupCircle } = DATA_RENDER_STRUCTURE;

	return (
		<main id="home">
			<section className="home__section">
				<div className="home__section--title">
					<p className="title-welcome">Welcome to </p>
					<p className="title-companyNm">GrainLogic!</p>
				</div>
				<div className="home__section--images">
					<img
						className="symbolic-image"
						src={SYMBOLIC_IMAGE}
						alt="SYMBOLIC_IMAGE"
					/>
					<img className="vector-image" src={VECTOR_IMAGE} alt="VECTOR_IMAGE" />
				</div>
			</section>
			<section className="home__section">
				<div className="home__menu">
					<Menu menudata={groupSquare} />
					<Menu menudata={groupCircle} />
				</div>
			</section>
		</main>
	);
};

export default Home;
