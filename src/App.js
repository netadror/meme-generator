import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Generator from './components/Generator';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Form from './components/Form';

function App() {

  return (
    <React.StrictMode>
      <Header />
      <Generator />
      <Main />
      <Form />
      <Projects />
      <Footer />
    </React.StrictMode>
  );

}

export default App;
