import React from "react";
import { makeStyles, Box, Grid, Card, CardContent, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  yellowDot: {
    backgroundColor: theme.palette.secondary.main,
    height: 48,
    width: 48,
  },
  blueDot: {
    backgroundColor: theme.palette.primary.main,
    height: 48,
    width: 48,
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function DashboardCard(props) {
  const styles = useStyles();
  return (
    <Grid item xs={props.xs} sm={props.sm} md={props.md} lg={props.lg}>
      <Card>
        <CardContent>
          <Grid container>
            {/* Title & money */}
            <Grid item xs={7}>
              <Grid container>
                <Box mb={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6">{props.title}</Typography>
                  </Grid>
                </Box>
                <Grid item xs={12}>
                  <Typography variant="h5">{props.number}</Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* Avatar */}
            <Grid item xs={5} className={styles.flex}>
              <Avatar className={`${styles[props.dot]}`}>{props.icon}</Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
