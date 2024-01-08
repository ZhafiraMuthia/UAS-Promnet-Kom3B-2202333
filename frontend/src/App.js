import React from 'react';
import './App.css';
import backgroundImage from './components/watu.jpg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateInventoryComponent from './components/CreateInventoryComponent';
import ListInventoryComponent from './components/ListInventoryComponent';
import ViewInventoryComponent from './components/ViewInventoryComponent';
import SuccessPage from "./components/SuccessPage";
import DeletePage from './components/DeletePage';

function App() {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '130vh',
    width: '100vw',
  };

  return (
    <div style={backgroundStyle}>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListInventoryComponent}></Route>
              <Route path="/books" component={ListInventoryComponent}></Route>
              <Route path="/add-book/:id" component={CreateInventoryComponent}></Route>
              <Route path="/view-book/:id" component={ViewInventoryComponent}></Route>
              <Route path="/delete-page/:id" component={DeletePage}></Route>
              <Route path="/success-page" component={SuccessPage}></Route>
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
