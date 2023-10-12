import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { IMilkTea, IOrder } from "src/types/Order";

interface Props {
  children: ReactNode;
}

type OrderContextProps = {
  form: UseFormReturn<IOrder, any, undefined>;
  size?: string;
  milk_tea?: IMilkTea;
  handleSetSize: (value: string) => void;
  onClickButtonBack: () => void;
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
  const { watch, setValue } = form;
  const { size, milk_tea } = watch();

  const handleSetSize = useCallback(
    (value: string) => {
      setValue("size", value);
    },
    [setValue]
  );

  const onClickButtonBack = useCallback(() => {
    if (milk_tea) {
      return setValue("milk_tea", undefined);
    }
    if (size) {
      return setValue("size", undefined);
    }
  }, [milk_tea, setValue, size]);

  const provideProps = useMemo(
    () => ({
      form,
      size,
      milk_tea,
      handleSetSize,
      onClickButtonBack,
    }),
    [form, size, milk_tea, handleSetSize, onClickButtonBack]
  );

  return (
    <OrderContext.Provider value={provideProps}>
      {children}
    </OrderContext.Provider>
  );
};
