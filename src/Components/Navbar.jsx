import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userProvider";

function Navbar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
        <div className="flex justify-between p-4">
          <Link className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
            referrals
          </Link>
          <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
            P
            {currentUser?.email ? (
              <div className="flex gap-4 justify-center items-center">
                <h1 className="text-gray-100">{currentUser?.name}</h1>

                <button
                  onClick={() => setCurrentUser({})}
                  className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link to="/login">
                  <button className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black">
                    Sign in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-6 py-2 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
