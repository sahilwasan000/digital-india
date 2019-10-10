import React from 'react'
import'../Aadhar.css'
class EnterAdhar extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h2 className="aadhar">Enter Your Aadhar Details!</h2>
                </div>
                <form method="POST" class="register-form" id="register-form">
                    <div id="Aadhar">
                            <div class="form-group">
                                <input className="abc" autoComplete="off" type="number" name="name" id="name" placeholder="Your Aadhar Card Number"/>
                            </div>
                            <div class="form-group">
                                <input  className="abc" type="date" name="date" id="date" placeholder="Your Date Of Birth"/>
                            </div>
                            <div class="form-group form-button def">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Submit"/>
                            </div>
                    </div>
                        </form>
            </div>
        )
    }
}
export default EnterAdhar;