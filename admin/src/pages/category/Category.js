import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCategories as listCategories, deleteCategory } from "../../redux/actions/categoryActions";
import { toast } from "react-toastify";

const Category = () => {
  const dispatch = useDispatch();
  const getCategories = useSelector((state) => state.getCategories);
  const { loading, err, categories } = getCategories;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const deleteCate = useSelector((state) => state.deleteCategories);
  const {
    loading: loadingDelete,
    error: errDelete,
    success,
  } = deleteCate;

  const handleDelete = (idCate) => {
    dispatch(deleteCategory(idCate));
    toast.success(`This cate has been delete successfully`);
  };

  useEffect(() => {
    if(success) {
      dispatch(listCategories());
    }
  }, [success]);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "nameCate", headerName: "Category Name", width: 200, align: "center" },
    {
      field: "createdAt",
      headerName: "Create at",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      align: "center",
      renderCell: (params) => {
        return (
          <DeleteOutline
            className="iconDelete"
            onClick={() => handleDelete(params.row._id)}
          />
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="header">
        <h3>Category</h3>
        <a
          href="/category/createCategory"
          type="button"
          className="buttonCreate"
        >
          Create category
        </a>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <DataGrid
          rows={categories}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(r) => r._id}
        />
      )}
    </div>
  );
};

export default Category;
