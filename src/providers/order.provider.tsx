import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
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
  isLoading: boolean;
  handleSetSize: (value: string) => void;
  onClickButtonBack: () => void;
  handleToggleIsLoading: () => void;
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
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<IOrder>({
    defaultValues: {
      size: undefined,
      milk_tea: undefined,
    },
  });
  const { watch, setValue } = form;
  const { size, milk_tea } = watch();

  const handleToggleIsLoading = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleSetSize = useCallback(
    (value: string) => {
      handleToggleIsLoading();
      setValue("size", value);
    },
    [handleToggleIsLoading, setValue]
  );

  const onClickButtonBack = useCallback(() => {
    handleToggleIsLoading();
    if (milk_tea) {
      return setValue("milk_tea", undefined);
    }
    if (size) {
      return setValue("size", undefined);
    }
  }, [handleToggleIsLoading, milk_tea, setValue, size]);

  const provideProps = useMemo(
    () => ({
      form,
      size,
      milk_tea,
      isLoading,
      handleSetSize,
      onClickButtonBack,
      handleToggleIsLoading,
    }),
    [
      form,
      size,
      milk_tea,
      isLoading,
      handleSetSize,
      onClickButtonBack,
      handleToggleIsLoading,
    ]
  );

  return (
    <OrderContext.Provider value={provideProps}>
      {children}
    </OrderContext.Provider>
  );
};
