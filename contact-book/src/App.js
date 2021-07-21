import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />}  >
        </Route>
        <Route path="/add" >
          <AddContact />
        </Route>
        <Route path="/edit/:id" >
          <EditContact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
