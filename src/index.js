import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import data from './data.json'

// console.log(data.logo)
// console.log(data.cards)

ReactDOM.render(
  <React.StrictMode>
    <Beers list={data.cards} />
  </React.StrictMode>,
  document.getElementById('root')
);
