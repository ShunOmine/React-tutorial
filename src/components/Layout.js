import React from "react";
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component{
    constructor(){
        super();
        this.name = "Mine";
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="wrapper">
                    <div className="container">
                        <h1>Welcome to React Sample App!</h1>
                        <h1>It's {this.name} !</h1>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}