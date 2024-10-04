import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Arrays from './components/Arrays'; // Import Arrays component

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Add more routes as necessary */}
          <Route path="/arrays" element={<Arrays />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
