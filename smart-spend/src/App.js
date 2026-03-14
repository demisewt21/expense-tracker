import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// ←←← CHANGE THESE IMPORT PATHS TO MATCH YOUR ACTUAL FILES ←←←
import Login from './pages/Login';           // or wherever your Login.jsx is
import Signup from './pages/Signup';         // or wherever your Signup.jsx is
import Dashboard from './pages/Dashboard';   // change if needed
import History from './pages/History';
// import ExpenseForm from './components/expenses/ExpenseForm'; 
import ExpenseForm from './components/expenses/ExpenseForm';  // ← this path worked before
import ExpenseTable from './components/expenses/ExpenseTable';   
import NavBar from './components/layout/NavBar/NavBar';
import AnimatedBackground from './components/ui/AnimatedBackground';

function App() {
  return (
    <div>
    <AnimatedBackground/>
    <NavBar/>
    <Routes>
      
      {/* Public pages (anyone can see) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* PROTECTED pages (must login first) */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/history" 
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/expense-form" 
        element={
          <ProtectedRoute>
            <ExpenseForm />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/expense-table" 
        element={
          <ProtectedRoute>
            <ExpenseTable />
          </ProtectedRoute>
        } 
      />

      {/* Default route */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
    </div>
  );
  
}

export default App;