import React, { useContext } from "react";
import AgeContext from "./ageContext";

function ChildAgeManage (props)
{

let newAge = useContext(AgeContext); // Data in newAge coming from parent , child can only read it



    return (
        <div>
          
            <h3> In child using Context Api, Age value : {newAge[0]} </h3>
            <button onClick={()=> {newAge[1](newAge[0]++)} }> Increase Age </button>
            <button onClick={()=> {newAge[1](newAge[0]--)} }> Reduce Age </button>
           

        </div>
);


}
export default ChildAgeManage;