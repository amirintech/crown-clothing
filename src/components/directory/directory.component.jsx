import "./directory.styles.scss";
import Category from "../category/category.component";

function Directory({ categories }) {
  return (
    <div className="directory">
      {categories.map(category => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
}

export default Directory;