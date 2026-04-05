import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#5c690658', minHeight: '100vh' }}>
      <header style={{ padding: '20px', backgroundColor: 'rgb(246, 121, 4)', color: 'white' }}>
        <h1>Finance Dashboard</h1>
      </header>
      
      <main style={{ padding: '20px' }}>
        <Dashboard />
      </main>
      
      <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#eee', marginTop: '20px' }}>
        <small>© 2026 Farzana Finance Dashboard Demo</small>
      </footer>
    </div>
  );
}

export default App;