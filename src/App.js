import { useState } from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
function App() {
const [page, setPage]= useState('about')
  return (
    <>
     <Header setPage={setPage} />
     <Main page={page} />
     <Footer setPage={setPage}/>
    </>
  );
}

export default App;
