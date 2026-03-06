import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ExpenseForm from './components/expenses/ExepenseForm';
import Signup from './pages/Signup';
import Login from './pages/Login';
import History from './pages/History';
import SharedLayout from './components/sharedLayout/SharedLayout';
// import NavItem from './components/ui/NavItem';
function App() {
  return (
  <div>
    
    <Routes>
    <Route path='/' element = {<SharedLayout/>}>
      <Route path='/dashBoard' element = {<Dashboard/>}/>
      <Route path='/expense-form' element = {<ExpenseForm/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/history' element = {<History/>}/>
      
      </Route>
      
    </Routes>
      
</div>

  );
}

export default App;

    