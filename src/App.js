import React, { useState } from 'react';

import './App.css';
import Price from './price';
import ParentAgeManage from './ageManageParent';
import AgeContext from './ageContext';


function App() {


//let [ageVal, setAgeVal] = useState(80);
let ageState = useState(80)

  return (
    <AgeContext.Provider value= {ageState}>
    <div>
       <Price />
       <hr/>
       <ParentAgeManage age="45"/>
       
    </div>
    </AgeContext.Provider>
  );
}

export default App;



