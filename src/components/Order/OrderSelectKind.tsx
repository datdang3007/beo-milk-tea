import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useCallback } from "react";
import { COLOR_PALLETTE } from "src/constants";
import { TEA_SIZE } from "src/constants/Order";
import { useOrderContext } from "src/providers/order.provider";

const SizeOption = [
  {
    name: "M",
    value: TEA_SIZE.MEDIUM,
    descriptions: [
      {
        id: 1,
        label: "Các loại trà",
        content: "...",
      },
      {
        id: 2,
        label: "Thông tin chi tiết",
        content: "...",
      },
    ],
  },
  {
    name: "L",
    value: TEA_SIZE.LARGE,
    descriptions: [
      {
        id: 3,
        label: "Các loại trà",
        content: "...",
      },
      {
        id: 4,
        label: "Thông tin chi tiết",
        content: "...",
      },
      {
        id: 5,
        label: "Các món đặc biệt",
        content: "...",
      },
    ],
  },
];

export const OrderSelectKind = () => {
  const { handleSetSize } = useOrderContext();
  const SizeOptionComponent = useCallback(
    () =>
      SizeOption.map((size) => {
        const { value, name, descriptions } = size;
        return (
          <KindBox key={value} item xs={12}>
            <Grid container justifyContent={"center"}>
              <BoxSizeText>
                <Typography fontWeight={900}>{name}</Typography>
              </BoxSizeText>
            </Grid>
            <Grid container mt={"24px"} rowGap={"8px"}>
              {descriptions.map((description) => {
                const { id, label, content } = description;
                return (
                  <Grid key={id} item xs={12}>
                    <Typography>
                      {label}: {content}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Grid container justifyContent={"center"} mt={"36px"}>
              <Grid item xs={9}>
                <ButtonSelect
                  fullWidth
                  variant="contained"
                  onClick={() => handleSetSize(value)}
                >
                  <Typography textTransform={"none"}>Chọn</Typography>
                </ButtonSelect>
              </Grid>
            </Grid>
          </KindBox>
        );
      }),
    [handleSetSize]
  );

  return (
    <Grid container justifyContent={"center"} mt={"40px"}>
      <Grid item container xs={11} rowGap={"24px"}>
        {/* TITLE */}
        <Grid item xs={12}>
          <Typography fontSize={"24px"} fontWeight={"bold"}>
            Lựa chọn size
          </Typography>
        </Grid>
        {SizeOptionComponent()}
      </Grid>
    </Grid>
  );
};

const KindBox = styled(Grid)({
  border: `1px solid ${COLOR_PALLETTE.BLACK}`,
  borderRadius: "8px",
  padding: "20px",
  background: COLOR_PALLETTE.WHITE,
  boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.16)",
});

const BoxSizeText = styled(Box)({
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: COLOR_PALLETTE.BASE,
  border: `1px solid ${COLOR_PALLETTE.BLACK}`,
  borderRadius: "50%",
});

const ButtonSelect = styled(Button)({
  background: `${COLOR_PALLETTE.HEADER} !important`,
});
