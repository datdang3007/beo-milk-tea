import { ReactNode, createContext, useContext, useMemo } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { IMilkTea, IOrder } from "src/types/Order";

interface Props {
  children: ReactNode;
}

type OrderContextProps = {
  form: UseFormReturn<IOrder, any, undefined>;
  size?: string;
  milk_tea?: IMilkTea;
};

const OrderContext = createContext<OrderContextProps | null>(null);

export const useOrderContext = () => {
  const ctx = useContext(OrderContext);

  if (!ctx) {
    throw new Error("need provider");
  }
  return ctx;
};

export const OrderProvider = ({ children }: Props) => {
  const form = useForm<IOrder>({
    defaultValues: {
      size: undefined,
      milk_tea: undefined,
    },
  });
  const { watch } = form;
  const { size, milk_tea } = watch();

  const provideProps = useMemo(
    () => ({
      form,
      size,
      milk_tea,
    }),
    [form, size, milk_tea]
  );

  return (
    <OrderContext.Provider value={provideProps}>
      {children}
    </OrderContext.Provider>
  );
};
