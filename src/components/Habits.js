import React, { Component } from 'react'
import Navbar from './Navbar'


class Habits extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>This is the Habits page</h1>
                
            </div>
        )
    }
}


export default Habits