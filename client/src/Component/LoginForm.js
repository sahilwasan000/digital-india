import React from 'react'
import'../Login.css'
class LoginForm extends React.Component{
    render(){
        return (
            <section class="sign-in logIn">
            <div class="container">
                <div class="signin-content">
                <div class="signin-image">
                        {/* <figure><img src="images/signin-image.jpg" alt="sing up image"></figure>
                        <a href="#" class="signup-image-link">Create an account</a> */}
                        <img className="sign-image" src={require('../Login.PNG')} />
                    </div>
                    <div class="signin-form">
                        <h2 class="form-title">Log in</h2>
                        <form method="/login" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Unique id"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit qwe" value="Log in"/>
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Forgot Passwor"/>
                            </div>
                        </form>
                        <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default LoginForm;
