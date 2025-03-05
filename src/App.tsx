import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import QRScanner from './pages/QRScanner';
import TrackingPage from './pages/TrackingPage';
import Analytics from './pages/Analytics';
import AddProduct from './pages/Add-Product';
import AddWarehouse from './pages/Add-Warehouse';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/add-warehouse" element={<AddWarehouse />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/qr-scanner" element={<QRScanner />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;