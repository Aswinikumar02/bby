import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './client/components/Registration.jsx';
import RegSuccessfully from './client/components/regSuccessfully.jsx';
const {browserHistory, hashHistory, Route, Router} = require('react-router');
import Detailed from './client/components/detailedReg.jsx';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path={"/"} component={Registration}/>
    <Route path={"/RegSuccessfully"} component={RegSuccessfully}/>
    <Route path={"/Detailed"} component={Detailed}/>
</Router>,
  document.getElementById('reactApp')
);
