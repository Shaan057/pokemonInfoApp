import React from "react";
import { v4 as uuidv4} from "uuid";
const Card = ({ pokemon, loading,infoPokemon}) => {
   // console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                            <div className="card" key={uuidv4()} onClick={()=>infoPokemon(item)}>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                    )
                })
        }

        </>
    )
}
export default Card;