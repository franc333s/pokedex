import { Link } from 'react-router-dom';


const CardPokemon = ({pokemon}) => {


	return (
		<>
		<Link to={`/pokemon/${pokemon.id}`} className=''>
			
			<div>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					//Above image taken from SPRITES in api
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>

			<div>

				<span>N° {pokemon.id}</span>
				<h3>{pokemon.name}</h3>

				<div>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
							{/* check this point to add more pokemon content to each card */}
						</span>
					))}
				</div>

					<div className='card-abilities'>
						<h4>Abilities:</h4>
						<ul>
							{pokemon.abilities.map(ability => (
							<li key={ability.ability.name}>{ability.ability.name}</li>
							))}
						</ul>
					</div>

			</div>
		</Link>
		</>
	);
};

export default CardPokemon