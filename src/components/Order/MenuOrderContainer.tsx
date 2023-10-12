import { FiberManualRecord, KeyboardBackspace } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import { useCallback, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { COLOR_PALLETTE } from "src/constants";
import { useOrderContext } from "src/providers/order.provider";
import { IIceOption, IMilkTea, ISugarOption, ITeaKind } from "src/types/Order";

const TeaKind = [
  {
    value: "Trà lài",
  },
  {
    value: "Hồng trà",
  },
  {
    value: "Trà hoa quả",
  },
] as ITeaKind[];

const SugarOption = [
  {
    value: "0%",
  },
  {
    value: "30%",
  },
  {
    value: "50%",
  },
  {
    value: "70%",
  },
  {
    value: "100%",
  },
] as ISugarOption[];

const IceOption = [
  {
    value: "0%",
  },
  {
    value: "30%",
  },
  {
    value: "50%",
  },
  {
    value: "70%",
  },
  {
    value: "100%",
  },
] as IIceOption[];

export const MenuOrderContainer = () => {
  const { onClickButtonBack } = useOrderContext();
  const formMilkTea = useForm<IMilkTea>({
    defaultValues: {
      kind: TeaKind[0],
      sugar: SugarOption[0],
      ice: IceOption[0],
      topping: [],
    },
  });
  const { control } = formMilkTea;

  const renderRadioOption = useCallback(
    (list: ITeaKind[] | ISugarOption[] | IIceOption[]) => {
      return list.map((item) => {
        const { value } = item;
        return (
          <FormControlLabel
            key={value}
            value={value}
            label={value}
            control={<Radio />}
          />
        );
      });
    },
    []
  );

  const TeaKindComponent = useMemo(
    () => renderRadioOption(TeaKind),
    [renderRadioOption]
  );

  const SugarOptionComponent = useMemo(
    () => renderRadioOption(SugarOption),
    [renderRadioOption]
  );

  const IceOptionComponent = useMemo(
    () => renderRadioOption(IceOption),
    [renderRadioOption]
  );

  return (
    <Grid container>
      <Grid container justifyContent={"center"} mt={"40px"}>
        {/* BUTTON BACK */}
        <Grid item container xs={11}>
          <Grid item xs={12}>
            <Button
              variant="text"
              startIcon={<KeyboardBackspace />}
              onClick={onClickButtonBack}
            >
              <Typography textTransform={"none"}>Trở lại</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid item container xs={11} rowGap={"24px"}>
          {/* TITLE */}
          <Grid item xs={12}>
            <Typography fontSize={"24px"} fontWeight={"bold"}>
              Danh mục
            </Typography>
          </Grid>

          <Grid item container xs={11} rowGap={"16px"}>
            {/* TEA KIND */}
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography fontSize={"18px"} fontWeight={"bold"}>
                  Loại trà
                </Typography>
              </Grid>
              <Grid item xs={12} mt={"8px"}>
                <Controller
                  control={control}
                  name="kind.value"
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <RadioGroup {...field} defaultValue={field.value}>
                        {TeaKindComponent}
                      </RadioGroup>
                    );
                  }}
                />
              </Grid>
            </Grid>

            {/* SUGAR */}
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography fontSize={"18px"} fontWeight={"bold"}>
                  Độ ngọt
                </Typography>
              </Grid>
              <Grid item xs={12} mt={"8px"}>
                <Controller
                  control={control}
                  name="sugar.value"
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <RadioGroup {...field} defaultValue={field.value}>
                        {SugarOptionComponent}
                      </RadioGroup>
                    );
                  }}
                />
              </Grid>
            </Grid>

            {/* ICE */}
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography fontSize={"18px"} fontWeight={"bold"}>
                  Lượng đá
                </Typography>
              </Grid>
              <Grid item xs={12} mt={"8px"}>
                <Controller
                  control={control}
                  name="ice.value"
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <RadioGroup {...field} defaultValue={field.value}>
                        {IceOptionComponent}
                      </RadioGroup>
                    );
                  }}
                />
              </Grid>
            </Grid>

            {/* TOPPING */}
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography fontSize={"18px"} fontWeight={"bold"}>
                  Topping
                </Typography>
              </Grid>
              <Grid item xs={12} mt={"16px"}>
                <Grid container alignItems={"center"}>
                  <FiberManualRecord
                    sx={{
                      fontSize: "16px",
                      color: COLOR_PALLETTE.YELLOW,
                      mr: "8px",
                    }}
                  />
                  <Typography fontSize={"16px"} fontWeight={"bold"}>
                    Trân châu
                  </Typography>
                </Grid>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Trân châu đen"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Trân châu trắng"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Trân châu đen"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} mt={"16px"}>
                <Grid container alignItems={"center"}>
                  <FiberManualRecord
                    sx={{
                      fontSize: "16px",
                      color: COLOR_PALLETTE.YELLOW,
                      mr: "8px",
                    }}
                  />
                  <Typography fontSize={"16px"} fontWeight={"bold"}>
                    Thạch
                  </Typography>
                </Grid>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Thạch dừa"
                  />
                  <FormControlLabel control={<Checkbox />} label="Thạch đen" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} mt={"16px"}>
                <Grid container alignItems={"center"}>
                  <FiberManualRecord
                    sx={{
                      fontSize: "16px",
                      color: COLOR_PALLETTE.YELLOW,
                      mr: "8px",
                    }}
                  />
                  <Typography fontSize={"16px"} fontWeight={"bold"}>
                    Kem béo
                  </Typography>
                </Grid>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Kem cheese"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Kem Cheese nướng"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* BUTTON ACTIONS */}
      <Grid container justifyContent={"center"} marginY={"40px"}>
        <Grid item container justifyContent={"center"} xs={11}>
          <Grid item xs={10}>
            <ButtonSubmit fullWidth variant={"contained"}>
              <Typography textTransform={"none"}>Tiếp tục</Typography>
            </ButtonSubmit>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ButtonSubmit = styled(Button)({
  padding: "8px 0",
});
