import { Button, Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants";

export const SubmitOrder = () => {
  return (
    <Grid container justifyContent={"center"} mt={"40px"}>
      <Grid item container justifyContent={"center"} xs={11}>
        <Grid item xs={10}>
          <ButtonSubmit fullWidth variant={"contained"}>
            <Typography textTransform={"none"}>Đặt đơn</Typography>
          </ButtonSubmit>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ButtonSubmit = styled(Button)({
  padding: '8px 0',
  backgroundColor: `${COLOR_PALLETTE.HEADER} !important`,
});
