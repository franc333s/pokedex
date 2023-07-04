import { Link } from 'react-router-dom';
import './CardPokemon.scss'


const CardPokemon = ({pokemon}) => {


	return (
		<>
		<Link to={`/pokemon/${pokemon.id}`} className="card">
			
			<div>
				<img className="card__img"
					src={pokemon.sprites.other.dream_world.front_default}
					//Above image taken from SPRITES in api
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>

			<div className="card__desc">

				<div>
					<h2 className="card__desc__name">{pokemon.name}</h2>
					<div className="card__desc__id">#{pokemon.id}</div>
				</div>
				
				<div>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
							{/* check this point to add more pokemon content to each card */}
						</span>
					))}
				</div>

			</div>
		</Link>
		</>
	);
};

export default CardPokemon