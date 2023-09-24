import React from "react";
import Carousel from "../Carousel"
import { countries } from "../Data";
export const Inicio = () => {
  return (
    <div>
      <Carousel images={countries} />
      
    </div>
    
  );
};
