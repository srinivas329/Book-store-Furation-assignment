import React, { Fragment } from "react";

import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "./context/Context";
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Books from './Components/Books'
import About from "./Components/About";
import Cart from './Components/Cart'
import BookDetails from './Components/BookDetails'
import LoginPage from "./Components/LoginPage";


function App() {
  return (
    <BrowserRouter>
    <Provider>
      <div className="App bg-container">
      <Navbar />
        <Switch>
          <Route exact path="/Login" component={LoginPage}/>
          
          <Route exact path="/" render={() => (
              <>
                <Header />
                <Books />
              </>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/book-cart" component={Cart} />
          <Route exact path="/book/details/:id" component={BookDetails} />
        </Switch>
      </div>
    </Provider>
    </BrowserRouter>
    
  );
}

export default App;