import AuthPage from "./LoginPage/AuthPage";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage/>}/>
        <Route path="/home" element={<div>Home Page</div>}/>
        <Route path="/signup" element={<div>Sign in</div>}/>
      </Routes>
    </Router>
  );
}

export default App;