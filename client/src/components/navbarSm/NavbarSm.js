import React from "react";
import "./navbarSm.css";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import LaptopChromebookOutlinedIcon from "@material-ui/icons/LaptopChromebookOutlined";
import TabletAndroidOutlinedIcon from '@material-ui/icons/TabletAndroidOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import axios from "axios";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const NavbarSm = () => {

  // useEffect(() => {
  //   try{
  //     const res = await axios.get(
  //       `cates${category ? "?category=" + category : ""
  //     }`
  //     )
  //   } catch(err) {
  //     console.log(err);
  //   }
  // })

  return (
    <div className="navbarSm">
      <div className="container">
        <a href="/?category=phone">
        <div className="type">
          <PhoneAndroidOutlinedIcon />
          <span>Điện thoại</span>
        </div>
        </a>
        <a href="/?category=laptop">
        <div className="type">
          <LaptopChromebookOutlinedIcon />
          <span>Laptop</span>
        </div>
        </a>
        <a href="/?category=tablet">
        <div className="type">
          <TabletAndroidOutlinedIcon />
          <span>Tablet</span>
        </div>
        </a>
        <a href="/?category=abc">
        <div className="type">
          <HeadsetOutlinedIcon />
          <span>Phụ kiện</span>
        </div>
        </a>
        <a href="/?category=watch">
        <div className="type">
          <WatchOutlinedIcon />
          <span>Đồng hồ thông minh</span>
        </div>
        </a>
      </div>
    </div>
  );
};

export default NavbarSm;
