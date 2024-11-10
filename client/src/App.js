import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import ConsignmentBooking from './components/pages/ConsignmentBooking';
import OrderTracking from './components/pages/OrderTracking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book-consignment" element={<ConsignmentBooking />} />
        <Route path="/track-order" element={<OrderTracking />} />
      </Routes>
    </Router>
  );
}

export default App;