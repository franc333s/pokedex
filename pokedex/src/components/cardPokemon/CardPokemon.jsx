import { Link } from 'react-router-dom';
import './CardPokemon.scss';


const CardPokemon = ({ pokemon }) => {

	return (
		<>
		<Link to={`/pokemon/${pokemon.name}`} className="card">
			<div className='card__img-container'>
				<img className='card__img'
					src={pokemon.sprites.other.dream_world.front_default}
					//Above image taken from SPRITES in api
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='card--flex'>
				<div className='card__desc card--flex__first'>
					<div>
						<h2 className='card__desc__name'>{pokemon.name}</h2>
						<div className='card__desc__id'>#{pokemon.id}</div>
					</div>
					<div>
						{pokemon.types.map(type => (
							<span key={type.type.name} className={type.type.name}>
								{type.type.name}
							</span>
						))}
					</div>
				</div>

				<div className='card--flex__second'>
					<div>
						<p>Base exp: {pokemon.base_experience}</p>
					</div>
					<div>
						<p>Height: {pokemon.height / 10}m</p>
					</div>
					<div>
						<p>Weight: {pokemon.weight / 10}Kg</p>
					</div>
				</div>
			</div>
		</Link>
		</>
	);
};

export default CardPokemon