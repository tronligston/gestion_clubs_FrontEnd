import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import App2 from './components/App2'
import App3 from './components/App3'
import App4 from './components/App4'

const hundle=props=>{
    const id=props.match.params.id
    return <App2 id={id}/>
}

const hundle2=props=>{
    const id=props.match.params.id
    return <App3 id={id}/>
}

const hundle3=props=>{
  const id=props.match.params.id
  return <App4 id={id}/>
}

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/evenement/:id" component={hundle} />
        <Route path="/club/:id" component={hundle2} />
        <Route path="/authentified/:id" component={hundle3} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
