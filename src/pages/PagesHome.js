import React from 'react'
import NavBar from '../components/nav';
import Slider from '../components/slider';
 
class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Slider/>

            </div>
        );
    }
}
export default Home;