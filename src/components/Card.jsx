import React, { useState } from 'react'
import axios from 'axios'
import './Card.css'

function Card() {
    const [pokemon, setPokemon] = useState({ name: "", photo: "", moves: 0 })
    const getPoke = async (event) => {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon/" + event.target.value)
        console.log(result.data)
        const data = {
            name: result.data.forms[0].name,
            photo: result.data.sprites.front_shiny,
            moves: result.data.moves.length
        }
        console.log(result.data.moves.length)
        setPokemon(data)
    }
    return (
        <div id='mainContainer'>
            <div id='card'>
                <div id='photoContainer'>
                    <img id='photo' src={pokemon.photo} alt='no'></img>
                </div>
                <div id='dataContainer'>
                    <div id='name'>{pokemon.name}</div>
                    <div id='moves'>{pokemon.moves}</div>
                </div>
            </div>
            <div id='btnContainer'>
                <button id='btn' onClick={getPoke} value={Math.floor(Math.random() * 100)}>Open the Pack</button>
            </div>
        </div>
    )
}

export default Card