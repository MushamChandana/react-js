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



//jan add react js file some distrub

// import './App.css';
// import Login from './Screen/Login';
// import Classcom from './Component/ClsComponent/Classcom';
// import Functioncom from './Component/FunComponet/Functioncom';
// import ClsProps from './Component/ClsComponent/ClsProps';
// import Reuse from './Component/FunComponet/Reuse';
// import Home from './React-Router/Home';
// import Dashboard from './React-Router/Dashboard';
// import About from './React-Router/About';
// import Pagenotfound from './React-Router/Pagenotfound';
// import Unittest from './Screen/Unittest';
// import Axios  from './Screen/Axios';
// import Fetch from './Screen/Fetch';
// import FirebaseFetch from './Screen/FirebaseFetch';
// import Firehome from './Firebasecurd/Firehome';
// import Edit from './Firebasecurd/Edit'
// import Contextapi from './UsecontextAPI/Contextapi';

// import Hocapp from './Screen/Hocapp'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">

// <Contextapi/>
//       <BrowserRouter>
//       <Routes>
//         <Route  path='/'  element={<Firehome/>}/>
//         <Route path='/edit' element={<Edit/>} />
//       </Routes>
//       </BrowserRouter>
     
     
//      {/* <Axios/>
//      <Fetch/>
//       <h1>chandu</h1>
//       <h2>Sudha</h2>
    
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/dashboard/:name' element={<Dashboard/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='*' element={<Pagenotfound/>}/>

//     </Routes>
//     </BrowserRouter> */}

//     </div>
//   );
// }

// export default App;
