import React from "react";
import Card from "../Card/Card";
import Pokeinfo from "../PokemonDetails/Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState(null);

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                return state;
            })
        })
    }

    const infoPokemon = (poke) => {
        setPokeDex(poke)
    }

    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <div className="bg-container">
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={infoPokemon} />
                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className="right-content">
                    {pokeDex ? <Pokeinfo data={pokeDex} /> : <p> &#8592; Click on POKEMON to see Details</p>}
                </div>
            </div>
        </div>
    )
}
export default Home;