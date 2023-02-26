import './App.css';
import ReactDOM from 'react-dom'; 
import ApiData from './PracticeComponents/ApiData';
import Apisearch from './Componetns/Apisearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './Componetns/Counter';
import InputSearch from './Componetns/InputSearch';
import InputDisplay from './Componetns/InputDisplay';
import RouteN from './Componetns/RouteN';
import Loadmore from './Componetns/Loadmore';
import Loadbtn from './Componetns/Loadbtn';
import Button from './Componetns/Button';

function App() {
  return (
    <>
      <div className="App" style={{ backgroundColor: "lightGreen" }}>
        <h6 style={{color:"red"}}>Shree Ganeshay Namah</h6> 
        <Button/>
        <Loadbtn/> 
        {/* <Functionn1/>*/}
        <BrowserRouter>
        <Routes>
              <Route path="/" element={<RouteN />} />
              <Route path="Apisearch" element={<Apisearch/>}/> 
              <Route path="Counter" element={<Counter />} />
              <Route path="InputSearch" element={<InputSearch />} />
              <Route path="InputDisplay" element={<InputDisplay />} /> 
              <Route path="Loadmore" element={<Loadmore />} />
          </Routes>
        </BrowserRouter>   
      </div>
    </>
  );
}
// function App() {
//   return (
//     <div><ApiData/></div>
//   )
// }
export default App;
