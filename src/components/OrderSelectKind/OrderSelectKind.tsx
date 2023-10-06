import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants";

export const OrderSelectKind = () => {
  return (
    <Grid container justifyContent={"center"} mt={"40px"}>
      <Grid item container xs={11} rowGap={"24px"}>
        {/* TITLE */}
        <Grid item xs={12}>
          <Typography fontSize={"24px"} fontWeight={"bold"}>
            Lựa chọn size
          </Typography>
        </Grid>

        {/* KIND BOX SIZE M */}
        <KindBox item xs={12}>
          <Grid container justifyContent={"center"}>
            <BoxSizeText>
              <Typography fontWeight={900}>M</Typography>
            </BoxSizeText>
          </Grid>
          <Grid container mt={"24px"} rowGap={"8px"}>
            <Grid item xs={12}>
              <Typography>Các loại trà: ...</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Thông tin chi tiết: ...</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} mt={"36px"}>
            <Grid item xs={9}>
              <ButtonSelect fullWidth variant="contained">
                <Typography textTransform={"none"}>Chọn</Typography>
              </ButtonSelect>
            </Grid>
          </Grid>
        </KindBox>

        {/* KIND BOX SIZE L */}
        <KindBox item xs={12}>
          <Grid container justifyContent={"center"}>
            <BoxSizeText>
              <Typography fontWeight={900}>L</Typography>
            </BoxSizeText>
          </Grid>
          <Grid container mt={"24px"} rowGap={"8px"}>
            <Grid item xs={12}>
              <Typography>Các loại trà: ...</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Thông tin chi tiết: ...</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Các món đặc biệt: ...</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} mt={"36px"}>
            <Grid item xs={9}>
              <ButtonSelect fullWidth variant="contained">
                <Typography textTransform={"none"}>Chọn</Typography>
              </ButtonSelect>
            </Grid>
          </Grid>
        </KindBox>
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
