import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiUserCheck } from "react-icons/bi";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import BackDrop from "./BackDrop";
import { truncateText } from "../utils/truncateText";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { user } = useSelector((state) => state.auth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutHandler = () => {};

  return (
    <div className="relative z-30">
      <div
        className="sm:border sm:border-slate-400 flex items-center flex-row gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        onClick={handleClick}
      >
        <Avatar alt="Menu" src="">
          {(user?.username)
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </Avatar>
      </div>
      <Menu
        sx={{ width: "400px" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
            sx: { width: 160 },
          },
        }}
      >
        <Link to="/profile">
          <MenuItem className="flex gap-2" onClick={handleClose}>
            <BiUserCheck className="text-xl" />
            <span className="font-bold text-[16px] mt-1">
              {truncateText(user?.username, 8)}
            </span>
          </MenuItem>
        </Link>

        <Link to="/profile/orders">
          <MenuItem className="flex gap-2" onClick={handleClose}>
            <FaShoppingCart className="text-xl" />
            <span className="font-bold ">Order</span>
          </MenuItem>
        </Link>

        <MenuItem className="flex gap-2" onClick={logOutHandler}>
          <div className="font-semibold w-full flex gap-2 items-center bg-button-gradient px-4 py-2 text-white rounded-sm">
            <IoMdExit className="text-xl" />
            <span className="font-bold">LogOut</span>
          </div>
        </MenuItem>
      </Menu>

      {open && <BackDrop />}
    </div>
  );
};
export default UserMenu;
