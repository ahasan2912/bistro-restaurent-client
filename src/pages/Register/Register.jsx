import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { userRegisterInEmail, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        userRegisterInEmail(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("user profile info update");
                        reset();
                        Swal.fire("Register Suceessful!");
                        navigate("/");
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.error('Registration Failed');
                    })
            })
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className='text-3xl font-semibold text-center'>Please Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
                        })} placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Passeord is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Passeord must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Passeord must be less 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be must be have one upercase and one lowercase and one number and one special character</p>}
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-primary' value={'Register'} />
                    </div>
                </form>
                <p className='text-center'><small>New Here? <Link to='/login'>Create an account</Link> </small></p>
            </div>
        </div>
    );
};

export default Register;