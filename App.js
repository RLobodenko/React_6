import React from 'react';
import Header from './Header';
import './App.css';
import Title from './Title';
import Problem from './Problem';
import Blue from './Blue';
import Introduction from './Introduction';
import Team from './Team';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Problem />
      <Blue />
      <Introduction />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
