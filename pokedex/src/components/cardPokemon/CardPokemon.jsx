import { Link } from 'react-router-dom';

const CardPokemon = ({pokemon}) => {

	return (
		<>
		<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
			
			<div className='card-img'>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					//el link de arriba se saca de la api y hay mas donde revisar - se puede sacar de SPRITES
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>

			<div className='card-info'>

				<span className='pokemon-id'>N° {pokemon.id}</span>
				<h3>{pokemon.name}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
							{/* para sacar los elementos del contenido de cada card revisar este punto */}
						</span>
					))}
				</div>
			</div>
		</Link>
		</>
	);
};

export default CardPokemon