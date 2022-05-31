import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };
export default function Detail() {
    const [poke, setPoke]=useState({});
    const [imageURL, setImageURL]=useState('');
    let { id } = useParams();
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const[state,setState]=useState({});
    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(pokemonUrl);
          setPoke(result.data);
          result.data.stats.map(stat => {
            switch (stat.stat.name) {
              case 'hp':
                hp = stat['base_stat'];
                break;
              case 'attack':
                attack = stat['base_stat'];
                break;
              case 'defense':
                defense = stat['base_stat'];
                break;
              case 'speed':
                speed = stat['base_stat'];
                break;
              case 'special-attack':
                specialAttack = stat['base_stat'];
                break;
              case 'special-defense':
                specialDefense = stat['base_stat'];
                break;
              default:
                break;
            }
          });
          setState({
            hp,
            attack,
            defense,
            speed,
            specialAttack,
            specialDefense
          });
          
        };
    
        fetchData();
      },[]);



    useEffect(()=>{
        setImageURL(`https://img.pokemondb.net/artwork/${id}.jpg`);
    },[poke])
    
    
        
    
    return (
        <div className="col">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-5">
                            <h5>{poke.name}</h5>
                        </div>
                        <div className="col-7">
                           <div className="float-right">
                                {poke.types ?(
                                poke.types.map(t=>(
                                    <span
                                        key={t.type.name}
                                        className="badge badge-pill mr-1"
                                        style={{
                                            backgroundColor: `#${TYPE_COLORS[t.type.name]}`,
                                            color: 'white'
                                        }}
                                    >
                                    {t.type.name}
                                    </span>
                                ))):(<h2>...</h2>)}
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className=" col-md-3 ">
                                <img src={imageURL}
                                className="card-img-top rounded mx-auto mt-2"
                                /> 
                        </div>
                        <div className="col-md-9">
                            <div className="row align-items-center">
                                <div className={`col-12 col-md-${poke.statTitleWidth}`}>
                                    HP
                                </div>
                                <div className={`col-12 col-md-${poke.statBarWidth}`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${state.hp}%`
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{state.hp}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className={`col-12 col-md-${poke.statTitleWidth}`}>
                                    Attack
                                </div>
                                <div className={`col-12 col-md-${poke.statBarWidth}`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                            width: `${state.attack}%`,
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{state.attack}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className={`col-12 col-md-${poke.statTitleWidth}`}>
                                    Defense
                                </div>
                            <div className={`col-12 col-md-${poke.statBarWidth}`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${state.defense}%`
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{state.defense}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className={`col-12 col-md-${poke.statTitleWidth}`}>
                                    Speed
                                </div>
                            <div className={`col-12 col-md-${poke.statBarWidth}`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                            width: `${state.speed}%`
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{state.speed}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className={`col-12 col-md-${poke.statTitleWidth}`}>
                                    Sp Atk
                                </div>
                            <div className={`col-12 col-md-${poke.statBarWidth}`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${state.specialAttack}%`
                                            }}
                                            aria-valuenow={state.specialAttack}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{state.specialAttack}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className={`col-12 col-md-${poke.statTitleWidth}`}>
                                    Sp Def
                                </div>
                                <div className={`col-12 col-md-${poke.statBarWidth}`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${state.specialDefense}%`
                                            }}
                                            aria-valuenow={state.specialDefense}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{state.specialDefense}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 class="card-title text-center">Profile</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-right">Taille:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-left">{poke.height} cm</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-right">Poids:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-left">{poke.weight} g</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        
     
    );
  }