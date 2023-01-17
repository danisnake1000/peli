import React from "react";
import peli from "../peli.json";
import { Cards } from "./Cards";
export const Grid = () => {
  
  return (
    <ul className="bg-black flex justify-between  flex-wrap gap-5 p-3 text-center text-xl text-white">
      {peli.map((pelis) => (
        <Cards key={pelis.id} pel={pelis}/>
      ))}
    </ul>
  );
};
