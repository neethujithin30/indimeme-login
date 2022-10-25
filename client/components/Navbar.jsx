import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext, AuthProvider } from "../pages/context/auth1";
import { useContext } from "react";
const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();
  const currentRoute = router.pathname;
  const navBar = user ? (
    <>
      <AuthProvider>
        <nav>
          <h1>Welcome {user.username} ....!</h1>
          <h2>{user.email}</h2>
          <Link href="/">
            <a className={currentRoute === "/" ? "active" : "non-active"}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={currentRoute === "/about" ? "active" : "non-active"}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={currentRoute === "/contact" ? "active" : "non-active"}
            >
              Contact
            </a>
          </Link>
          <Link href="/Login">
            <a
              className={currentRoute === "/Login" ? "active" : "non-active"}
              onClick={logout}
            >
              Logout
            </a>
          </Link>
        </nav>
      </AuthProvider>
    </>
  ) : (
      <>
        <nav>
          <Link href="/">
            <a className={currentRoute === "/" ? "active" : "non-active"}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={currentRoute === "/about" ? "active" : "non-active"}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={currentRoute === "/contact" ? "active" : "non-active"}
            >
              Contact
            </a>
          </Link>
          <Link href="/Register">
            <a
              className={currentRoute === "/Register" ? "active" : "non-active"}
            >
              Signup
            </a>
          </Link>
          <Link href="/Login">
            <a className={currentRoute === "/Login" ? "active" : "non-active"}>
              Login
            </a>
          </Link>
        </nav>
      </>
  );

  return navBar;
};
export default NavBar;

