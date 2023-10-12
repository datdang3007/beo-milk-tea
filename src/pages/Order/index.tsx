import { OrderContainer } from "src/components/Order";
import { OrderProvider } from "src/providers/order.provider";

export const Order = () => {
  return (
    <OrderProvider>
      <OrderContainer />
    </OrderProvider>
  );
};
