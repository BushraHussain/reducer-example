import React, { useState } from 'react';

import './App.css';
import Price from './price';
import ParentAgeManage from './ageManageParent';
import AgeContext from './ageContext';


function App() {


//let [ageVal, setAgeVal] = useState(80);
let ageState = useState(80) // useState defined as array once 
                                                // pass whole array to provider in return 
  return (
    <AgeContext.Provider value= {ageState}> 
    <div>
      <h1 className="heading" > Reducer and context example - session 5 </h1>
       <Price />
       <hr/>
       <ParentAgeManage age="45"/>
       
    </div>
    </AgeContext.Provider>
  );
}

export default App;



