import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// import HeaderComponent from './components/header';
// import HeaderTwoComponent from './components/header2';
import AboutUsComponent from './pages/aboutUs';
import HomeComponent from './pages/home';
import MovieComponent from './pages/movie';

function App() {
  return (
    <div className="App">
      {/* <HeaderComponent/> */}
      
      <BrowserRouter>
      {/* <HeaderTwoComponent /> */}
      <Routes>
     
        <Route path="/home" element={<HomeComponent />}/>
        <Route path="/about-us" element={<AboutUsComponent />}/>
        <Route path="/movie/:id" element={<MovieComponent />}/>

        
        <Route path="*" element={<Navigate replace to="/home" />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
