import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers as listUsers } from "../../redux/actions/userActions";
import "./user.css";

const User = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.getUsers);
  const { loading, err, users } = getUsers;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  //const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  const handleDelete = (id)=> {
    
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "username", headerName: "Username", width: 200 },
    {
      field: "createdAt",
      headerName: "dateCreateAcount",
      width: 250,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      type: "bool",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={{ pathname: "/user/" + params.row._id, user: params.row }} className="actionEdit">
            <Edit />
            </Link>
            <DeleteOutline className="iconDelete" onClick={()=>handleDelete(params.row._id)}/>
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <DataGrid
          rows={users}
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

export default User;
