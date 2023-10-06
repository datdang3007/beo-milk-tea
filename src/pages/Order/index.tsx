import { Grid, styled } from "@mui/material";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { MenuOrderContainer } from "src/components/MenuOrder";
import { OrderSelectKind } from "src/components/OrderSelectKind";
import { SubmitOrder } from "src/components/SubmitOrder";
import { COLOR_PALLETTE } from "src/constants";

export const Order = () => {
  return (
    <MainLayout container>
      <Header />
      <OrderSelectKind />
      <MenuOrderContainer />
      <SubmitOrder />
      <Footer />
    </MainLayout>
  );
};

const MainLayout = styled(Grid)({
  backgroundColor: COLOR_PALLETTE.BASE,
});
