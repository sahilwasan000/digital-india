import React from 'react';
import'../Login.css';
import {connect} from 'react-redux';
import {SignUp,Login} from '../actions'
class LoginSigninOption extends React.Component{
    render(){
        return (
            
                <div id="login-main">
                    <div id="login" onClick={ ()=>this.props.LogIn() }>Login</div>
                    <div id="signUpbtn" onClick={ ()=>this.props.SignUp() }>SignUp</div>
                </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        SignUp:()=>dispatch( SignUp() ),
        LogIn:()=>dispatch( Login())
    }
}
export default connect(null,mapDispatchToProps)(LoginSigninOption);