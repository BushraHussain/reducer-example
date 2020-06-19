import React, { useReducer } from "react";
import PriceReducer from "./priceReducer";

function Price ()
{

let [priceValue, Dispatch] = useReducer (PriceReducer, 0);



return(
    <div>
        <h1>Price Value using reducer : {priceValue}</h1>

        <button onClick={()=>Dispatch("reduce")}> Reduce Price </button>
        <button onClick={()=>Dispatch("increase")}> Increase Price </button>

    </div>
);

}

export default Price;