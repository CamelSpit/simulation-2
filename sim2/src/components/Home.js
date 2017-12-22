import React, {Component} from "react";
import {Route, Link} from 'react-router-dom';

 export default class Home extends Component {
     //sim1: 36I
     constructor(){
         super()
         
         //sim1: 36C
         this.state = {
             username : '',
             password : ''
         }

     }

     updateUsername(newstring){
         //sim1: 36D
        this.setState({
            username : newstring
        })
     }

     updatePassword(newstring){
         this.setState({
             password: newstring
         })
     }

     render(){
     return (
            <div>

                <p>Username</p>
                {/* sim1: 36J */}
                <input onChange={event =>this.updateUsername(event.target.value)}/>
                <p>Password</p>
                <input onChange={event=>this.updatePassword(event.target.user)}/> <br/>

                <Link to='/start'><button>Login</button> <br/></Link>
                <Link to='/register'><button>Register</button></Link>

            </div>
     )
    }
 }