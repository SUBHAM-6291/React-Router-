import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/Components/Header"; // Import your Header component
import Footer from "./Components/Footer";

function App() {
    return (
        <Router>
            <Header /> 
          <Footer/>
        </Router>
    );
}

export default App;
