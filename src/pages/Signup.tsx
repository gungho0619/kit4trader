import { useState, useEffect } from "react";
import { NormalInput } from "../components/Inputs";

import Background from "../assets/images/backgrounds/background.png";

import { Button, Box, Typography, TextField, Checkbox } from "@mui/material";
import { styled } from "@mui/system";
import {
  VisibilityOffOutlined,
  VisibilityOutlined,
  CheckCircleOutlineOutlined,
  Language,
} from "@mui/icons-material/";
import { AppleSvg, GoogleSvg } from "../config/images";

import axios from "axios";
import { createImportSpecifier } from "typescript";

export const Signup = () => {
  const initialInfo = {
    userName: "John Smith",
    userEmail: "johnsmith@gmail.com",
    password: "jgs20619KJH!",
  };

  const [userInfo, setUserInfo] = useState(initialInfo);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [allowTerms, setAllowTerms] = useState(false);

  const handleUserName = (value: any) => {
    setUserInfo({ ...userInfo, userName: value });
  };

  const handleUserEmail = (value: any) => {
    setUserInfo({ ...userInfo, userEmail: value });
  };

  const handleUserPassword = (value: any) => {
    setUserInfo({ ...userInfo, password: value });
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleAllowTerms = () => {
    setAllowTerms(!allowTerms);
  };

  const handleSignUp = () => {
    if (allowTerms) {
      //   axios
      //     .post(`${process.env.REACT_APP_ENDPOINT}/create-session`, {
      //       language: "en",
      //       token: process.env.REACT_APP_TOKEN,
      //     })
      //     .then((response) => {
      //       axios
      //         .post(`${process.env.REACT_APP_ENDPOINT}/signup`, {
      //           name: userInfo.userName,
      //           emailAddress: userInfo.userEmail,
      //           password: userInfo.password,
      //           allowTerms: true,
      //         })
      //         .then((response) => {
      //           console.log(response.data);
      //         })
      //         .catch((error) => {
      //           console.error("Error fetching data: ", error);
      //         });
      //     });
      const agent = axios.create({
        baseURL: process.env.REACT_APP_ENDPOINT,
        withCredentials: true, // Enable cookies
      });
      agent
        .post(`/create-session`, {
          language: "en",
          token: process.env.REACT_APP_TOKEN,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      agent
        .post("/signup", {
          name: userInfo.userName,
          emailAddress: userInfo.userEmail,
          password: userInfo.password,
          allowTerms: true,
        })
        .then((response) => {
          console.log("--------------", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <SignupContainer>
      <SignupBox>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "22px",
            lineHeight: "25.78px",
            color: "#18181B",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          Signup
        </Typography>
        <NormalInput
          label="Name"
          type="text"
          name=""
          value={userInfo.userName}
          setValue={handleUserName}
          placeholder="John Smith"
          component={<CheckCircleOutlineOutlined sx={{ color: "#5db65b" }} />}
        />
        <NormalInput
          label="Email"
          type="text"
          name=""
          value={userInfo.userEmail}
          setValue={handleUserEmail}
          placeholder="johnsmith@gmail.com"
        />
        <NormalInput
          type={passwordVisible ? "text" : "password"}
          name=""
          value={userInfo.password}
          setValue={handleUserPassword}
          placeholder="password"
          component={
            passwordVisible ? (
              <VisibilityOffOutlined onClick={handlePasswordVisibility} />
            ) : (
              <VisibilityOutlined onClick={handlePasswordVisibility} />
            )
          }
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Checkbox
            sx={{
              color: "#7c72f2",
              "&.Mui-checked": {
                color: "#7c72f2",
              },
            }}
            onClick={handleAllowTerms}
          />
          <Typography
            sx={{
              color: "#5A5B61",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            I agree to <CheckText>privacy policy </CheckText> and{" "}
            <CheckText>terms of conditions</CheckText>
          </Typography>
        </Box>
        <SignupButton onClick={handleSignUp}>Signup</SignupButton>
        <Box>
          <Typography
            sx={{
              color: "#5A5B61",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "22px",
              paddingTop: "4px",
              textAlign: "center",
            }}
          >
            Already have account?{" "}
            <span style={{ color: "#7C72F2", fontWeight: "600" }}>Login</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #E2E2E2",
              height: "1px",
              width: "45%",
            }}
          ></Box>
          <Typography
            sx={{
              color: "#5A5B61",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "14.06px",
            }}
          >
            or
          </Typography>
          <Box
            sx={{
              borderBottom: "1px solid #E2E2E2",
              height: "1px",
              width: "45%",
            }}
          ></Box>
        </Box>
        <SocialContainer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px",
              border: "1px solid #E2E2E2",
              borderRadius: "8px",
            }}
          >
            <SocialIcon src={GoogleSvg} alt="Google Auth" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px",
              border: "1px solid #E2E2E2",
              borderRadius: "8px",
            }}
          >
            <SocialIcon src={AppleSvg} alt="Apple Auth" />
          </Box>
        </SocialContainer>
      </SignupBox>
    </SignupContainer>
  );
};

const SignupContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "60px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SignupBox = styled(Box)(({ theme }) => ({
  background: "white",
  margin: "0px 12px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  gap: "20px",
  boxShadow: "4px 4px 4px 4px #AECECE",
  [theme.breakpoints.down(640)]: {
    padding: "20px",
  },
}));

const CheckText = styled("a")(({ theme }) => ({
  textDecoration: "underline",
}));

const SignupButton = styled(Button)(({ theme }) => ({
  background: "#7C72F2",
  borderRadius: "8px",
  padding: "14px 0px",
  color: "#FFFFFF",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "18.75px",
  textTransform: "capitalize",
  "&:hover": {
    background: "#7C72F2",
  },
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  justifyContent: "center",
}));

const SocialIcon = styled("img")(({ theme }) => ({
  width: "32px",
  height: "32px",
}));
