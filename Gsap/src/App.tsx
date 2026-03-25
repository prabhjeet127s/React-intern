

import { Route, Routes } from "react-router-dom";

import Pages1 from "./Components/Pages1";
import Home from "./Components/Home";



function App() {




  return (
    <>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Pages1 />} />
      </Routes>


    </>
  );
}

export default App;


