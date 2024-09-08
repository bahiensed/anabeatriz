"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import Link from "next/link";

export default function NavBarMobile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack sx={{ position: "absolute" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "#fff", fontSize: "40px" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="#about">
          <MenuItem onClick={handleClose}>Sobre Mim</MenuItem>
        </Link>
        <Link href="#map">
          <MenuItem onClick={handleClose}>Endereço</MenuItem>
        </Link>
        <Link href="#reviews">
          <MenuItem onClick={handleClose}>Reviews</MenuItem>
        </Link>
        <Link href="#gallery">
          <MenuItem onClick={handleClose}>Galeria</MenuItem>
        </Link>
        <Link href="#contact">
          <MenuItem onClick={handleClose}>Contato</MenuItem>
        </Link>
      </Menu>
    </Stack>
  );
}
