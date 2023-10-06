import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { COLOR_PRIMARY } from "src/constants";

export const MenuOrderContainer = () => {
  return (
    <Grid container justifyContent={"center"} mt={"40px"}>
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
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Hồng trà"
                />
                <FormControlLabel control={<Checkbox />} label="Trà Lài" />
                <FormControlLabel control={<Checkbox />} label="Trà hoa quả" />
              </FormGroup>
            </Grid>
          </Grid>

          {/* TEA QUANTITY */}
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography fontSize={"18px"} fontWeight={"bold"}>
                Định lượng
              </Typography>
            </Grid>
            <Grid item xs={12} mt={"8px"}>
              <Slider
                defaultValue={70}
                aria-label="Default"
                valueLabelDisplay="auto"
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
              <Slider
                defaultValue={70}
                aria-label="Default"
                valueLabelDisplay="auto"
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
              <Slider
                defaultValue={70}
                aria-label="Default"
                valueLabelDisplay="auto"
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
                    color: COLOR_PRIMARY.DEFAULT,
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
                    color: COLOR_PRIMARY.DEFAULT,
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
                    color: COLOR_PRIMARY.DEFAULT,
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
  );
};
