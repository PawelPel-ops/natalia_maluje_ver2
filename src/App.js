import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <Router>
      <Helmet>
        <title>Stylizacja paznokci - Natalia Piotrowicz</title>
        <meta name="description" content="Stylizacja paznokci Ostrzeszów. Paznokcie hybrydowe, żelowe, przedłużane, zdobienia paznokci" />
        <meta
          name="keywords"
          content="
          stylizacja paznokci ostrzeszów, 
          cennik usług stylizacji paznokci,
          mobilna stylizacja paznokci,
          letnia stylizacja paznokci,
          paznokcie hybrydowe, 
          paznokcie na lato,
          paznokcie na wiosne,
          paznokcie wzory,
          hybrydy ostrzeszów,
          paznokcie wzory ostrzeszów,
          paznokcie french,
          manicure hybrydowy,
          stylizacja paznokci z certyfikatem MKnails,
          stylizacja paznokci lato,
          stylizacja paznokci z dojazdem do klienta,
          stylizacja paznokci w domu,
          manicure żelowy ostrzeszów,
          stylizacja żelowa ostrzeszów,
          pedicure ostrzeszów,
          french ostrzeszów,
          babyboomer ostrzeszów,
          ombre ostrzeszów,
          rzęsy ostrzeszów"
        />
      </Helmet>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
