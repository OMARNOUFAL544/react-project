import React from "react";
import History from "./history/history"
import Vision from "./Vision/vision"
import Vision2 from "./Vision/vision2"
import Mission from "./mission/mission"
import Hero from './Hero/hero'
import Partner from './partner/partner'

function App() {
  return (
<>
<Hero/>

<div style={{display:"flex",justifyContent:'center',gap:'200px'}}>
  <div>
    <Vision2/>
  </div>
  <div style={{backgroundColor:"#ec7a1e",width:'2px',height:'500px',position:'relative',top:'50px',}}></div>
  <div><Mission/></div>
</div>

<History/>
<Partner/>





</>
  );
}

export default App;
