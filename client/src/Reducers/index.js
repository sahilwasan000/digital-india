import {combineReducers} from 'redux'
const logIn=false

const LogIn=(state=logIn,action)=>{
    // const stat=state
    // let newState=state
    // if(action.type==='SignInForm'){
    //    newState=Object.assign({}, stat, {logIn:false, SingUp:true})
    // }
    // if(action.type==='LoginForm'){
    //     newState=Object.assign({}, stat, {logIn:true, SingUp:false})
    // }
    // return newState
    let newState=state;
    if(action.type==='SignInForm'){
        newState=false
    }
    if(action.type==='LoginForm'){
        newState=true;
    }
    return newState;
}

export default combineReducers({
    login:LogIn
})