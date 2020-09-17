import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import Footer from './Footer';
import Greeting from './Greeting';
import Main from './Main';
import Corse from './Corse';
import About from './About';
import Conversion from './Conversion';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main />
    <Greeting />
    <Corse />
    <About />
    <Conversion />
    <Footer />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
