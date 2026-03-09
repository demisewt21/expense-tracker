import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ExpenseForm from './components/expenses/ExepenseForm';
import Signup from './pages/Signup';
import Login from './pages/Login';
import History from './pages/History';
import SharedLayout from './components/sharedLayout/SharedLayout';
import AnimatedBackground from './components/AnimatedBackground';
import ExpenseTable from './components/expenses/ExpenseTable';
import Footer from './components/footer/Footer';
// import NavItem from './components/ui/NavItem';
function App() {
  return (
  <div className="relative min-h-screen text-white flex flex-col ">
    
    <AnimatedBackground/>
    <div className="flex-1">
    <Routes>
    <Route path='/' element = {<SharedLayout/>}>
    <Route index element={<Dashboard />} />
      <Route path='dashboard' element = {<Dashboard/>}/>
      <Route path='expense-form' element = {<ExpenseForm/>}/>
      <Route path='signup' element = {<Signup/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route path='history' element = {<History/>}/>
      <Route path='expense-table' element = {<ExpenseTable/>}/>
     
      
      </Route>
      
    </Routes>
    
      </div>
      <Footer/>
</div>

  );
}

export default App;

    