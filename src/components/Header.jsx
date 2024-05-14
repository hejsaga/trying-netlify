import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/authFunctions";

const Header = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);

  return (
    <div className="grid grid-cols-2 mt-6 mx-10 items-center">
      <h1 className="font-bold">Company name</h1>

      <nav className="flex justify-end">
        {userLoggedIn ? (
          <>
            <Link to="/home" className="mr-4">
              Home
            </Link>
            <Link className="mr-4" to="/about">
              About
            </Link>
            <Link to="/products">Products</Link>
            <p className="mx-5 font-bold">{currentUser.email}</p>
            <button onClick={signOutUser}>Log out</button>
          </>
        ) : (
          <Link to="/login" className="ml-5">
            Log in
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
