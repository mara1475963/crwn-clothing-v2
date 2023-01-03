import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "..//../assets/crown.svg";
import {
  NavigationContainer,
  NavLink,
  NavLinkContainer,
  LogoContainer,
} from "./navigation.styles.jsx";
import { useContext } from "react";
import { UserContext } from "../../contexts/userProvider";
import { CartContext } from "../../contexts/cardContextprovider";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import { useSelector } from "react-redux";

const Navigation = () => {
  //const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <CrwnLogo></CrwnLogo>
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinkContainer>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
