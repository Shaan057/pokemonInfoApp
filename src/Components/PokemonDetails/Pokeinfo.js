import React from "react";
import { v4 } from "uuid";
const Pokeinfo = ({ data }) => 
   
     (
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                     <div key={v4()} className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                        <h3 key={v4()}>{poke.stat.name}:{poke.base_stat}</h3>
                                )
                            })
                        }
                    </div>
                </>
            )

    )

export default Pokeinfo