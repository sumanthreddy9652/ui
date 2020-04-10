import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">RCI Online Design Systems</a>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link to={'/'} className='nav-link active'>Button</Link>
                </li>
                <li class="nav-item">
                  <Link to={'/btngroup'} className='nav-link active'>Button Group</Link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
              <Switch>
                <Route exact path='/' component={Button} />
                <Route path='/btngroup' component={ButtonGroup} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
