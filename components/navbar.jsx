import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  return (
    <Box backgroundColor="black">
      <Box
        padding="20px"
        w="60%"
        m="auto"
        display="flex"
        justifyContent="space-around"
        color="white"
      >
        <Link href="/">HOME</Link>
        <Link href="/wishlist">WISHLIST </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
