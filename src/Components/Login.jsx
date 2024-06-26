import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { singInUser,singInWithGoogle } = useContext(AuthContext);
  const navigate =useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // Login with firebase
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset()
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });

  };
  const handleGoogleSingIn=()=>{
    singInWithGoogle()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col shadow-lg max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                required
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              />
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Donot have an account yet?
              <Link
                to="/register"
                className="hover:underline dark:text-violet-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
        <p><button onClick={handleGoogleSingIn} className="btn btn-ghost">Google</button></p>
      </div>
    </div>
  );
};

export default Login;
