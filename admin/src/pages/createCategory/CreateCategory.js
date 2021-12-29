import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories as listCategories,
  addCategory,
} from "../../redux/actions/categoryActions.js";
import "./createCategory.css";
import { useHistory } from "react-router";
import { toast } from 'react-toastify'

const CreateCategory = () => {
  const [nameCate, setNameCate] = useState("");
  const dispatch = useDispatch();
  const getCategories = useSelector((state) => state.getCategories);
  const { loading, err, categories } = getCategories;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const history = useHistory();

  const checkCate = categories.find(
    (category) => category.nameCate === nameCate && nameCate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameCate) {
      return toast.warning("Please fill in all field!");
    }
    if (checkCate) {
      return toast.error("This category already exists!");
    }

    dispatch(addCategory({ nameCate }));
    toast.success("Create category successful");
    history.push("/category");
  };
  return (
    <div>
      <h3>Create Category</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <p>Category Name:</p>
          <input
            value={nameCate}
            name="nameCate"
            onChange={(event) => {
              setNameCate(event.target.value);
            }}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCategory;
