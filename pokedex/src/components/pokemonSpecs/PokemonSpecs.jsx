import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import { MutatingDots } from  'react-loader-spinner';

import ReturnButton from '../button/ReturnButton';
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
						<div className='pokemon__info-flex'>
                            <div className='pokemon__info__figure'>
                                <img className='pokemon__info__figure__img'
                                    src={pokemon.sprites.other.dream_world.front_default}
                                    alt={`Pokemon ${pokemon?.name}`}
                                />
                                <div className='pokemon__info__figure__type'>
                                    {pokemon.types.map(type => (
                                        <span key={type.type.name} className={`${type.type.name}`}>
                                            {type.type.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='pokemon__info__details'>
                                    <h2>Specifications</h2>
                                    <div className='pokemon__info__details__item'>
                                        <p>Base experience: {pokemon.base_experience}</p>
                                    </div>
                                    <div className='pokemon__info__details__item'>
                                        <p>Height: {pokemon.height / 10}m</p>
                                    </div>
                                    <div className='pokemon__info__details__item'>
                                        <p>Weight: {pokemon.weight / 10}Kg</p>
                                    </div>
                            </div>
                        </div>
                        <div className='pokemon__info__stats'>
                            <h2>Statistics</h2>
                            <div className='pokemon__info__stats__item'>
                                <p>Health points</p>
                                <div className='pokemon__info__stats__item__pb bar-color-hp' style={{ width: `${pokemon.stats[0].base_stat}%` }}></div>
                                <p>
                                    {pokemon.stats[0].base_stat}
                                </p>
                            </div>
                            <div className='pokemon__info__stats__item'>
                                <p>Attack</p>
                                <div className='pokemon__info__stats__item__pb bar-color-attack' style={{ width: `${pokemon.stats[1].base_stat}%` }}></div>
                                <p>
                                    {pokemon.stats[1].base_stat}
                                </p>
                            </div>
                            <div className='pokemon__info__stats__item'>
                                <p>Defense</p>
                                <div className='pokemon__info__stats__item__pb bar-color-defense' style={{ width: `${pokemon.stats[2].base_stat}%` }}></div>
                                <p>
                                    {pokemon.stats[2].base_stat}
                                </p>
                            </div>
                            <div className='pokemon__info__stats__item'>
                                <p>Special Attack</p>
                                <div className='pokemon__info__stats__item__pb bar-color-sp-attack' style={{ width: `${pokemon.stats[3].base_stat}%` }}></div>
                                <p>
                                    {pokemon.stats[3].base_stat}
                                </p>
                            </div>
                            <div className='pokemon__info__stats__item'>
                                <p>Special Defense</p>
                                <div className='pokemon__info__stats__item__pb bar-color-sp-defense' style={{ width: `${pokemon.stats[4].base_stat}%` }}></div>
                                <p>
                                    {pokemon.stats[4].base_stat}
                                </p>
                            </div>
                            <div className='pokemon__info__stats__item'>
                                <p>Speed</p>
                                <div className='pokemon__info__stats__item__pb bar-color-speed' style={{ width: `${pokemon.stats[5].base_stat}%` }}></div>
                                <p>
                                    {pokemon.stats[5].base_stat}
                                </p>
                            </div>
                        </div>
					</section>
                    <section className='pokemon__return-btn'>
                        <ReturnButton text="Return to all Pokémons"/>
                    </section>
				</>
			)}
		</main>
	);
}


export default PokemonSpecs;