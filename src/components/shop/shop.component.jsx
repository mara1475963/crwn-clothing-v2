import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { CategoriesContext } from "../../contexts/categoriesContextprovider";

import "./shop.styles.scss";

import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../routes/categories-preview/categrires-preview.component";
import Category from "../../routes/category/category.component";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
