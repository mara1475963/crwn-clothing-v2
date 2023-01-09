import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { CategoriesContext } from "../../contexts/categoriesContextprovider";

import "./shop.styles.scss";

import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../routes/categories-preview/categrires-preview.component";
import Category from "../../routes/category/category.component";
import { CategoriesContextProvider } from "../../contexts/categoriesContextprovider";
import { useDispatch } from "react-redux";
import {
  fetchCategoriesAsync,
  setCategories,
} from "../../store/category/category.actions";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync);
  }, []);

  return (
    <CategoriesContextProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </CategoriesContextProvider>
  );
};

export default Shop;
