import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "..//../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContextprovider";
import { CartContext } from "../../contexts/cardContextprovider";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

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
            <CardIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
