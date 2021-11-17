import './App.css';
import React from 'react';
// import Hooks from './Component/screen/Hooks';
// import Fonclick from './Component/Functioncom/Fonclick';
// import Display from './Component/screen/display';
// import Fuseeffect from './Component/Functioncom/Fuseeffect'
// import Fonchange from './Component/Functioncom/Fonchange'
// import Conchange from './Component/Classcom/Conchange'
// import Fonsubmit from './Component/Functioncom/Fonsubmit'
// import Consubmit from './Component/Classcom/Consubmit'
// import Fmap from './Component/Functioncom/Fmap'
// import Cmap from './Component/Classcom/Cmap'
// import Ffilter from './Component/Functioncom/Ffilter'
import Ffirebase from './Component/Functioncom/Ffirebase'
import Navbar from './Component/Functioncom/Router/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashbord from './Component/Functioncom/Router/Dashboard';
import Home from './Component/Functioncom/Router/Home';
import Task from './Component/Functioncom/Router/Task';
import IndividualTask from './Component/Functioncom/Router/IndividualTask';
import About from './Component/Functioncom/Router/About';
import Fimage from './Component/Functioncom/Fimage'
import Faudio from './Component/Functioncom/Faudio'
import Fvideo from './Component/Functioncom/Fvideo'
import ComponentA from './Component/Functioncom/Usecontext/ComponentA';
import Fbootstrap from './Component/Functioncom/Fbootstrap'




function App() {

  return (
    <div className="App">
      <BrowserRouter>
   <Navbar/>
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/dashboard" exact component={Dashbord} />
     <Route path="/about/:name" exact component={About}/>
     <Route path="/task" exact component={Task} />
     <Route path="/task/:id" exact component={IndividualTask} />
   </Switch>
   </BrowserRouter>

   {/* <Fbootstrap/> */}




    </div>
  );
}

export default App;
