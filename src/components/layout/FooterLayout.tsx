import { Button, Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  FacebookSvg,
  GithubSvg,
  InstagramSvg,
  Logo,
  Mailsvg,
  PhoneSvg,
  TwitterSvg,
} from "../../config/images";
import { Twitter } from "@mui/icons-material";
export const FooterLayout = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Box sx={{ background: "#FFFFFF", height: "18px" }}>
            <LogoIcon src={Logo} alt="Kit4Trader Logo" />
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "28px",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Kit<span style={{ color: "#685ff1" }}>4</span>Trader
          </Typography>
        </Box>
        <Typography
          sx={{
            paddingTop: "8px",
            color: "#B9B3B3",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "22px",
          }}
        >
          Forex trading involves significant risk of loss and is not suitable
          for all investors. High leverage can amplify profits but also losses.
          Carefully consider your investment objectives, experience level, and
          risk tolerance before trading. Information provided is for general
          guidance only and does not constitute investment advice. We are not
          liable for losses or damages arising from the use of this information.
          Ensure you understand the risks associated with online Forex trading
          and seek advice from an independent financial advisor if necessary.
        </Typography>
        <SocialLinks>
          <SocialIcon src={TwitterSvg} alt="Twitter" />
          <SocialIcon src={FacebookSvg} alt="Facebook" />
          <SocialIcon src={InstagramSvg} alt="Instagram" />
          <SocialIcon src={GithubSvg} alt="Github" />
        </SocialLinks>
      </SocialContainer>
      <CompanyContainer>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "24px",
            color: "#FAFAFA",
          }}
        >
          Company
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "#B9B3B3",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "16px",
            width: "100%",
          }}
        >
          <Typography>Experts</Typography>
          <Typography>Online Courses</Typography>
          <Typography>Webinars</Typography>
          <Typography>Signals</Typography>
        </Box>
      </CompanyContainer>
      <ContactContainer>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "24px",
            color: "#FAFAFA",
          }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "#B9B3B3",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "16px",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ContactIcon src={PhoneSvg} alt="Phone" />
            <Typography>+1 (743)-384-4994</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ContactIcon src={Mailsvg} alt="Mail" />
            <Typography>kit4trader@info.com</Typography>
          </Box>
        </Box>
      </ContactContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled(Box)(({ theme }) => ({
  background: "#12141D",
  padding: "56px 120px 30px 120px",
  [theme.breakpoints.down(1280)]: {
    flexWrap: "wrap",
    padding: "56px 48px 30px 48px",
    gap: "36px",
  },
  [theme.breakpoints.down(640)]: {
    flexDirection: "column",
    padding: "56px 24px 30px 24px",
    gap: "36px",
  },
  display: "flex",
  gap: "116px",
  alignItems: "flex-start",
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "680px",
  [theme.breakpoints.down(1280)]: {
    width: "100%",
  },
}));

const LogoIcon = styled("img")(({ theme }) => ({
  width: "18px",
  height: "18px",
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
}));

const SocialIcon = styled("img")(({ theme }) => ({
  width: "36px",
  height: "36px",
}));

const CompanyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));

const ContactContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));

const ContactIcon = styled("img")(({ theme }) => ({
  width: "20px",
  height: "20px",
}));
