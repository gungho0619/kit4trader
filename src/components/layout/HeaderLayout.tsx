import { useState } from "react";

import { Button, Container, Box, Typography } from "@mui/material";
import { display, styled } from "@mui/system";
import { CartSvg, Logo, MenubarSvg } from "../../config/images";
import { useNavigate } from "react-router-dom";

export const HeaderLayout = () => {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <HeadContainer>
        <MobileMenuItems>
          <MenuIcon
            src={MenubarSvg}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            alt="Menu"
          />
        </MobileMenuItems>
        <MenuContainer>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <LogoIcon src={Logo} alt="Kit4Trader Logo" />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "28px",
                textTransform: "uppercase",
                color: "#2D2F31",
              }}
            >
              Kit<span style={{ color: "#685ff1" }}>4</span>Trader
            </Typography>
          </Box>
          <MenuItems>
            <MenuItem>Signals</MenuItem>
            <MenuItem>Experts</MenuItem>
            <MenuItem>Online courses</MenuItem>
            <MenuItem>Webinars</MenuItem>
          </MenuItems>
          <DesktopMenuItems onClick={() => setIsDesktopOpen(!isDesktopOpen)}>
            <MenuIcon src={MenubarSvg} alt="Desktop Menu" />
          </DesktopMenuItems>
        </MenuContainer>
        <SignContainer>
          <Box
            sx={{
              padding: "9px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CartIcon src={CartSvg} alt="Cart" />
          </Box>
          <LoginButton>Login</LoginButton>
          <SignupButton
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </SignupButton>
        </SignContainer>
      </HeadContainer>
      {isDesktopOpen && (
        <Box
          sx={{
            height: "100vh",
            width: "200px",
            background: "#E3E3E3",
            display: "flex",
            flexDirection: "column",
            padding: "24px 20px",
            gap: "4px",
          }}
        >
          <MenuItem onClick={() => setIsDesktopOpen(false)}>Signals</MenuItem>
          <MenuItem onClick={() => setIsDesktopOpen(false)}>Experts</MenuItem>
          <MenuItem onClick={() => setIsDesktopOpen(false)}>
            Online courses
          </MenuItem>
          <MenuItem onClick={() => setIsDesktopOpen(false)}>Webinars</MenuItem>
        </Box>
      )}
      {isMobileOpen && (
        <Box
          sx={{
            height: "100vh",
            width: "200px",
            background: "#E3E3E3",
            display: "flex",
            flexDirection: "column",
            padding: "24px 20px",
            gap: "4px",
          }}
        >
          <MenuItem onClick={() => setIsMobileOpen(false)}>Signals</MenuItem>
          <MenuItem onClick={() => setIsMobileOpen(false)}>Experts</MenuItem>
          <MenuItem onClick={() => setIsMobileOpen(false)}>
            Online courses
          </MenuItem>
          <MenuItem onClick={() => setIsMobileOpen(false)}>Webinars</MenuItem>
          <LoginButton>Login</LoginButton>
          <SignupButton>Signup</SignupButton>
        </Box>
      )}
    </>
  );
};

const HeadContainer = styled(Box)(({ theme }) => ({
  height: "56px",
  //   width: "100%",
  padding: "0px 120px",
  [theme.breakpoints.down("md")]: {
    padding: "0px 24px",
  },
  background: "white",
  boxShadow: "0px 4px 4px 0px #CECECE29",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-around",
    gap: "24px",
  },
}));

const MenuContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  //   width: "100%",
  alignItems: "center",
  gap: "40px",
}));

const LogoIcon = styled("img")(({ theme }) => ({
  width: "18px",
  height: "18px",
}));

const DesktopMenuItems = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down(1280)]: {
    display: "flex",
  },
  [theme.breakpoints.down(640)]: {
    display: "none",
  },
}));

const MobileMenuItems = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down(640)]: {
    display: "flex",
  },
}));

const MenuItems = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "32px",
  [theme.breakpoints.down(1280)]: {
    display: "none",
  },
}));

const MenuItem = styled("a")(({ theme }) => ({
  color: "#2D2F31",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
}));

const SignContainer = styled(Box)(({ theme }) => ({
  //   width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const CartIcon = styled("img")(({ theme }) => ({
  width: "18px",
  height: "18px",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  width: "75px",
  padding: "8px 16px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#2D2F31",
  textTransform: "capitalize",
}));

const SignupButton = styled(Button)(({ theme }) => ({
  background: "#6D62F1",
  width: "75px",
  borderRadius: "8px",
  padding: "8px 16px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#FFFFFF",
  textTransform: "capitalize",
  "&:hover": {
    background: "#6D62F1",
  },
}));

const MenuIcon = styled("img")(({ theme }) => ({
  width: "36px",
  height: "36px",
}));
