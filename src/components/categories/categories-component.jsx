import DirectoryItem from "../directory-item/directory-item.component";
import "./categories.styles.scss";

const Categories = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
