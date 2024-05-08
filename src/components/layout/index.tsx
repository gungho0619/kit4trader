import { HeaderLayout } from "./HeaderLayout";
import { FooterLayout } from "./FooterLayout";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderLayout />
      <>{children}</>
      <FooterLayout />
    </>
  );
};
