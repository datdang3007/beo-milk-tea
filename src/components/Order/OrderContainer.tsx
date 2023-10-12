import { Box, Grid, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants";
import { useOrderContext } from "src/providers/order.provider";
import { Header } from "../Header";
import { MenuOrderContainer } from "./MenuOrderContainer";
import { OrderSelectKind } from "./OrderSelectKind";
import icon_loading from "src/assets/img/icon_loading.png";

export const OrderContainer = () => {
  const { size, isLoading } = useOrderContext();
  return (
    <MainLayout>
      {isLoading && (
        <Loading>
          <IconLoading>
            <img src={icon_loading} alt="" />
          </IconLoading>
        </Loading>
      )}
      <Header />
      <Grid container>
        {!size ? <OrderSelectKind /> : <MenuOrderContainer />}
      </Grid>
    </MainLayout>
  );
};

const MainLayout = styled(Grid)({
  minHeight: "100vh",
  backgroundColor: COLOR_PALLETTE.BASE,
});

const Loading = styled(Box)({
  position: "fixed",
  zIndex: "9999",
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0, .6)",
});

const IconLoading = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  img: {
    display: "block",
    width: "150px",
    height: "150px",
    animation: "myEffect 1.5s infinite",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "rotate(0)",
    },
    "100%": {
      opacity: 1,
      transform: "rotate(360deg)",
    },
  },
});
