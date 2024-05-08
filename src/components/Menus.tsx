import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { Box, Typography, TextField, Menu, MenuItem } from "@mui/material";

interface NormalMenuProps {
  element: string;
  setElement: (element: any) => void;
}

export const NormalMenu = (props: NormalMenuProps) => {
  const { element, setElement } = props;
  return <NormalMenuContainer></NormalMenuContainer>;
};

const NormalMenuContainer = styled(Box)(({ theme }) => ({}));

const NormalMenuButton = styled(Box)(({ theme }) => ({}));

const NormalMenuList = styled(Menu)(({ theme }) => ({}));

const NormalMenuItems = styled(MenuItem)(({ theme }) => ({}));
