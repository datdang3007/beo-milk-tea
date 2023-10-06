import { Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants";

export const Footer = () => {
  return (
    <HeaderContainer container justifyContent={"center"} mt={"40px"}>
      <Typography
        color={COLOR_PALLETTE.WHITE}
        fontSize={{
          xs: "20px",
          sm: "22px",
          lg: "24px",
        }}
      ></Typography>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Grid)({
  background: COLOR_PALLETTE.HEADER,
  padding: "12px 0",
});
