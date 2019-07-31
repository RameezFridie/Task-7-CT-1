// Import react library from react
import React from 'react';
// import the css stylin file
import './App.css';
// import the Product component to the app
import { Product } from './components/Product'
// import the Header component
import { Header } from './components/Header'
// import the Landing page component
import { Landing } from './components/Landing'
// Run all component pages
function App() {
    return (
        // Main div that contains all infortmation
        <
        div className = "App" >
        <
        div class = "header" >
        <
        Header / >
        <
        /div> <
        div class = "landing" >
        <
        Landing / >
        <
        /div> <
        div class = "products" >
        <
        Product / >
        <
        /div> <
        /div>
    );
}

export default App;