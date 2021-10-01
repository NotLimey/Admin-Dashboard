import '../scss/login.scss'
import Logo from '../Img/logo.png';

const Login = () => {
    return (
        <div className="login">
            <form className="pb-2">
                <div className="brand">
                    <div className="brand-logo"><img src={Logo} alt="brand-logo" /></div>
                    <h3>Login</h3>
                </div>
                <div className="login-para">
                    <label className="login-label" for="email">Email</label><br />
                    <input className="login-input" id="email" name="email" type="email" placeholder="Email.. "/>
                </div>
                <div className="login-para">
                    <label className="login-label" for="password">Password</label><br />
                    <input className="login-input" id="password"  name="password" type="password" placeholder="Password.. " />
                </div>
                <div className="box-center">
                    <button type="submit" className="default-submit">Login </button>
                </div>
            </form>
        </div>
    )
}

export default Login;