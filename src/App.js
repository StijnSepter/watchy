import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
  
    <div className="App">
      <h1>React App</h1>
      <Row title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
       />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="SciFi" fetchUrl={requests.fetchSciFi}/>
      <Row title="Mystery" fetchUrl={requests.fetchMystery}/>
    </div>
  );
}

export default App;
