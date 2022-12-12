import "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer onClick={() => navigate(route)}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>

      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
