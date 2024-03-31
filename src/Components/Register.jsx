import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser} =useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email, password);
        // Create user in firebase
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
      };
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col shadow-lg max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register Now</h1>
            <p className="text-sm dark:text-gray-600">
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleRegister} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  id="text"
                  placeholder="your name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
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
              <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
              Register
            </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Donot have an account yet?
                <Link
                  to="/login"
                  className="hover:underline dark:text-violet-600"
                >
                  Login
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
