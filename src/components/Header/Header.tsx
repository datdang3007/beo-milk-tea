import { Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants";

export const Header = () => {
  return (
    <HeaderContainer container justifyContent={"center"}>
      <Typography
        color={COLOR_PALLETTE.WHITE}
        fontWeight={"bold"}
        fontSize={{
          xs: "20px",
          sm: "22px",
          lg: "24px",
        }}
      >
        Buffet Milk Tea Order
      </Typography>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Grid)({
  background: COLOR_PALLETTE.PINK,
  padding: "12px 0",
});
