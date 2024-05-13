import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { userName, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <div className="grid grid-cols-2 mt-6 mx-10 items-center">
      <h1 className="font-bold">Company name</h1>

      <nav className="flex justify-end">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link className="mr-4" to="/about">
          About
        </Link>
        <Link to="/products">Products</Link>

        {isLoggedIn ? (
          <>
            <p className="mx-5 font-bold">{userName}</p>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <button className="ml-5" onClick={login}>
            Log in
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
