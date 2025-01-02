import { useContext, useEffect, useState } from 'react';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    const { userSignInEmail } = useContext(AuthContext)
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignInEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire("Login Suceessful!");
                navigate(from, {replace: true});
                form.reset();
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className='text-3xl font-semibold text-center'>Please Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the text avobe" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input disabled={disable} type="submit" className='btn btn-primary' value={'Login'} />
                    </div>
                </form>
                <p className='text-center'><small>New Here? <Link to='/register'>Create an account</Link> </small></p>
            </div>
        </div>
    );
};

export default Login;