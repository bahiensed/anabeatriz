"use client";

import { useState } from "react";

import { ExpandCircleDownOutlined } from "@mui/icons-material";
import Link from 'next/link';
import { Tooltip } from "@mui/material";

const BannerArrowDown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Link href="#about">
      <Tooltip
        arrow
        placement="left"
        title="Clique para mais informações"
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -8],
                },
              },
            ],
          },
        }}
      >
        <ExpandCircleDownOutlined
          onClick={toggleMenu}
          sx={{
            color: "#cab882",
            width: "52px",
            height: "52px",
          }}
        />
      </Tooltip>
    </Link>
  )
}

export default BannerArrowDown;
