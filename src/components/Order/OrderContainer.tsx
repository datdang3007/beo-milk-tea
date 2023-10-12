import { Grid, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants";
import { useOrderContext } from "src/providers/order.provider";
import { Header } from "../Header";
import { MenuOrderContainer } from "./MenuOrderContainer";
import { OrderSelectKind } from "./OrderSelectKind";

export const OrderContainer = () => {
  const { size } = useOrderContext();

  return (
    <MainLayout>
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
