import React from 'react';
import LogSignOption from './LogSignoption';
import FormManager from './FormManager'
class LoginSignin extends React.Component{
    render(){
        return (
            <div>
               <LogSignOption />
               <FormManager />
            </div>
        )
    }
}
export default LoginSignin;
