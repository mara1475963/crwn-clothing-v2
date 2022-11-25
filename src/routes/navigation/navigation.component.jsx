import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "..//../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContextprovider";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo></CrwnLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          
            {currentUser ? (
              <Link className="nav-link" to="/auth" onClick={signOutUser}>SIGN OUT
              </Link>
            ):(
              <Link className="nav-link" to="/auth" >SIGN IN
              </Link>
            )}
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
