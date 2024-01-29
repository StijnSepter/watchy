import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {

  return (
  
    <div className="App">
      <h1>React App</h1>
      <Row title="x" fetchUrl={requests.fetchTrending} />
      <Row title="" fetchUrl={requests.fetchTopRated}/>
      <Row title="" fetchUrl={requests.fetchActionMovies}/>
    </div>
  );
}

export default App;
