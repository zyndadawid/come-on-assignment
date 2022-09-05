import { useDispatch } from "react-redux";
import { updateCategoriesSearch } from "../../features/categoriesSlice";

import "./categories.styles.scss";

const Categories = ({ categories }) => {
  const dispatch = useDispatch();
  const { id, name } = categories;

  return <h4 onClick={() => dispatch(updateCategoriesSearch(id))}>{name}</h4>;
};

export default Categories;
