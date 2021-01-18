import React, {useState, useEffect, useCallback} from "react";
import './App.css';

// function useOffline(){
//   const [isOffline, setIsOffline] = useState(false)

//   useEffect(()=>{
//     window.addEventListener("offline", setIsOffline(true))
//     window.addEventListener("online", setIsOffline(false))
    
//   },[])
//   return isOffline
// }

// export default function App(){
//   const isOffline = useOffline()
//   return (
//     <div>
//     {isOffline ? <div>Sorry You are offline</div> : <div>You are online</div>} 
//     </div>
//   )
// };
