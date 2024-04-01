import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchNewAlbums,fetchTopAlbums,fetchSongs } from './api/api';

function App() {
  const [data,setData]=useState({});
  const generateData=(key,source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return{...prevState,[key]:data};
      });
    });
  }
  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
  },[]);
  const {topAlbums=[], newAlbums=[],songs=[]}=data;
  return (
   <>
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
    </StyledEngineProvider>

   </>
  );
}

export default App;
