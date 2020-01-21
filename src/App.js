import React from 'react';
import $ from "jquery";
import './App.css';
import { Button } from 'reactstrap';
import Example from './components/nav';
import Slider from './components/slider';

function App() {
    return ( 
    <div className = "App" >
     <Slider />
     <Example />
            <Button color="danger">Danger!</Button>
    </div>
    );
}
export default App;