import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { authStateChangeListener } from "./utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";
import { useDispatch } from "react-redux";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./components/authentication/authentication.component";
import Shop from "./components/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCategoriesMap } from "./store/category/category.actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
