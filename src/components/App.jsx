import { Routes, Route, Navigate } from "react-router-dom";
import Home from "page/Home";

export const App = () => {
  return (
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="tweets" element={}/>
    </Routes>
  );
};

