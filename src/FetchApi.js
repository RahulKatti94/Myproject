import React, { useState, useEffect} from "react";

const FetchApi = (props) => {
    const[data,setData] = useState([]);  

    useEffect(()=>{
     fetch('https://api.goswirl.live/index.php/shopify/videolistingV2?user=pl8fbadv').then(y=>y.json()).then(y => {setData(y)
 }); 
 
    },[]) 
    
 console.log(data); 
  return (
    <div>
        
    </div>
  )
}

export default FetchApi