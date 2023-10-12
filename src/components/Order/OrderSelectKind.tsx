import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useCallback } from "react";
import { COLOR_PALLETTE, TEXT_COLOR } from "src/constants";
import { TEA_SIZE } from "src/constants/Order";
import { useOrderContext } from "src/providers/order.provider";
import LogoImage from "src/assets/img/logo.png";

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
                <Typography fontWeight={900} color={TEXT_COLOR.WHITE}>
                  {name}
                </Typography>
              </BoxSizeText>
            </Grid>
            <Grid container mt={"24px"} rowGap={"8px"}>
              {descriptions.map((description) => {
                const { id, label, content } = description;
                return (
                  <Grid key={id} item xs={12}>
                    <Typography color={TEXT_COLOR.BLACK}>
                      {label}: {content}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Grid container justifyContent={"center"} mt={"36px"}>
              <Grid item xs={9}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleSetSize(value)}
                >
                  <Typography
                    textTransform={"none"}
                    color={COLOR_PALLETTE.WHITE}
                  >
                    Chọn
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </KindBox>
        );
      }),
    [handleSetSize]
  );

  return (
    <Grid container justifyContent={"center"} mt={"24px"}>
      <Grid item container xs={11} rowGap={"24px"}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={"auto"}>
            <BoxImage>
              <img src={LogoImage} alt="" />
            </BoxImage>
          </Grid>
        </Grid>

        {/* TITLE */}
        <Grid item xs={12}>
          <Typography
            color={TEXT_COLOR.BLACK}
            fontSize={{
              xs: "18px",
              sm: "20px",
              lg: "22px",
            }}
            fontWeight={"bold"}
          >
            Lựa chọn size
          </Typography>
        </Grid>
        {SizeOptionComponent()}
      </Grid>
    </Grid>
  );
};

const KindBox = styled(Grid)({
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
  background: COLOR_PALLETTE.PINK,
  borderRadius: "50%",
});

const BoxImage = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "120px",
  overflow: "hidden",
  img: {
    display: "block",
    width: "50%",
    height: "auto",
  },
});
