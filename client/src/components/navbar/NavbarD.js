import React, { useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import "./navbarD.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useSelector } from "react-redux";

const NavbarD = () => {
  const { user, dispatch } = useContext(AuthContext);
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
  }
  return (
    <div className="navbar">
      <div className="container-lg">
        <div className="left">
          <a href="/"><img
            src="data:image/png;base64,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"
            className="logo"
          ></img></a>
          <div className="search">
            <input />
            <SearchIcon />
          </div>
          <Button className="button" href="/cart">
            <ShoppingCartOutlinedIcon />
            <span>Giỏ hàng <Badge bg="primary">{getCartCount()}</Badge></span>
          </Button>
        </div>
        <div className="right">
          {!user ? (
            <>
              <Button className="button" href="/register">
                Đăng kí
              </Button>
              <Button className="button" href="/login">
                Đăng nhập
              </Button>
            </>
          ) : (
            <>
              <p>Hello, {user.username}</p>
              <Button className="button" onClick={() => dispatch(logout())}>
                Đăng xuất
              </Button>
              <Button className="button" href="/register">
                Đăng kí
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarD;
