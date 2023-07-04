import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import { MutatingDots } from  'react-loader-spinner';

import "./PokemonSpecs.scss";

const PokemonSpecs = () => {
	const { getPokemonByID } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams();

	const fetchPokemon = async id => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon(id);
	}, []);

	return (
		<main className='pokemon vertical-padding'>
			{loading ? (
				<MutatingDots 
                    height="100"
                    width="100"
                    color="#4fa94d"
                    secondaryColor= '#4fa94d'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
			) : (
				<>
                    <section className='pokemon__id'>
                        <h1 className='pokemon__id__name'>{(pokemon.name)}</h1>
                        <div className='pokemon__id__id p--main'>#{pokemon.id}</div>
					</section>
                    
					<section className='pokemon__info'>
						
						<div className='pokemon__info__img-type'>
							<img className='pokemon__info__img'
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
                            <div className='pokemon__info__type'>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
						</div>

						<div className='pokemon__info__details'>

                                <h2>Details</h2>

                                <div className='pokemon__info__details__item'>
									<p>Base experience</p>
									<p>{pokemon.base_experience}</p>
								</div>

								<div className='pokemon__info__details__item'>
									<p>Height</p>
									<p>{pokemon.height * 10} cm</p>
								</div>

								<div className='pokemon__info__details__item'>
									<p>Weight</p>
									<p>{pokemon.weight / 10} Kg</p>
								</div>

						</div>
                    
                            
                        <div className='pokemon__info__stats'>
                            <h2>Statistics</h2>
                            <div className='stats'>
                                <div className='stat-group'>
                                    <p>Hp</p>
                                    <div className='progress-bar'></div>
                                    <p className='counter-stat'>
                                        {pokemon.stats[0].base_stat}
                                    </p>
                                </div>
                                <div className='stat-group'>
                                    <p>Attack</p>
                                    <div className='progress-bar'></div>
                                    <p className='counter-stat'>
                                        {pokemon.stats[1].base_stat}
                                    </p>
                                </div>
                                <div className='stat-group'>
                                    <p>Defense</p>
                                    <div className='progress-bar'></div>
                                    <p className='counter-stat'>
                                        {pokemon.stats[2].base_stat}
                                    </p>
                                </div>
                                <div className='stat-group'>
                                    <p>Special Attack</p>
                                    <div className='progress-bar'></div>
                                    <p className='counter-stat'>
                                        {pokemon.stats[3].base_stat}
                                    </p>
                                </div>
                                <div className='stat-group'>
                                    <p>Special Defense</p>
                                    <div className='progress-bar'></div>
                                    <p className='counter-stat'>
                                        {pokemon.stats[4].base_stat}
                                    </p>
                                </div>
                                <div className='stat-group'>
                                    <p>Speed</p>
                                    <div className='progress-bar'></div>
                                    <p className='counter-stat'>
                                        {pokemon.stats[5].base_stat}
                                    </p>
                                </div>
                            </div>
                        </div>

					</section>

				</>
			)}
		</main>
	);
}


export default PokemonSpecs;