import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { KeyboardArrowRight as RightIcon } from "@material-ui/icons";

export default function Text(props) {
  return (
    <div>
      <Grid container>
        <Typography variant="body1">{props.fatherLink}</Typography>
        <Box mx={1}>
          <RightIcon />
        </Box>
        <Typography variant="body1">{props.childLink}</Typography>
        {props.secondChild ? (
          <Grid item>
            <Grid container>
              <Box mx={1}>
                <RightIcon />
              </Box>
              <Typography variant="body1">{props.secondChildLink}</Typography>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
      <Box>
        <Typography variant="subtitle1">{props.subTitle}</Typography>
      </Box>
    </div>
  );
}
