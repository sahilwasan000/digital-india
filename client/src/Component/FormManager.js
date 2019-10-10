import React from 'react';
import {connect} from 'react-redux';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
class FormManager extends React.Component{
    render(){
        console.log(this.props.LogSign)
        if(this.props.LogIn){
            return <LoginForm/>
            
        }
        else{
            return <SignUpForm/>
        }
    }
}
const mapStateToProps=state=>{
    return {
        LogIn:state.login
    }
}
export default connect(mapStateToProps)(FormManager)