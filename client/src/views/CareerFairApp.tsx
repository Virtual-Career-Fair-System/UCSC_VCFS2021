import React, {useState} from "react";
import Home from "../Pages/home/Home";

const CareerFairApp: React.FC = () => {
  const [logedIn,setLogedIn]=useState<boolean>(false);
  return (
      <Home logedIn={logedIn}
            setLogedIn={setLogedIn}/>
  );
}

export default CareerFairApp;