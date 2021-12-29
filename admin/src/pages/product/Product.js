import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts, deleteProduct } from "../../redux/actions/productActions";
import "./product.css";
import { toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { loading, err, products } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const deletePro = useSelector((state) => state.deleteProducts);
  const {
    loading: loadingDelete,
    error: errDelete,
    success,
  } = deletePro;

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    // toast.success("This product has been delete successfully");
  };

  useEffect(() => {
    if(success == true) {
      toast.success("This product has been deleted successfully");
      dispatch(listProducts());
    }
    if(success == false) {
      toast.error("This product deleted fail");
    }
  }, [success]);

  const userSignin = useSelector((state) => state.userSignin);
  const { user } = userSignin;

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "img",
      headerName: "Image",
      width: 120,
      renderCell: (params) => {
        return (
            <div className="productImg">
        <img src={params.row.img} alt="img" className="productImage"></img>
        </div>
        )
      },
    },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "priceOrigin",
      headerName: "Price Origin(VND)",
      width: 200,
      align: "center"
    },
    {
      field: "discount",
      headerName: "Discount(%)",
      width: 170,
      align: "center"
    },
    {
      field: "gift",
      headerName: "Gift",
      width: 180,
    },
    {
      field: "rate",
      headerName: "Rate(star)",
      width: 140,
      align: "center"
    },
    {
      field: "cate",
      headerName: "Cate",
      width: 110,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Create at",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <a href={"/product/" + params.row._id} className="actionEdit">
              <Edit className="iconEdit"/>
            </a>
            <DeleteOutline
              className="iconDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="header">
        <h3>Product</h3>
        <a href="/createProduct" type="button" className="buttonCreate">Create product</a>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <DataGrid
          rows={products}
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

export default Product;
