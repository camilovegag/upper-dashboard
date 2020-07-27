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
  whiteDot: {
    backgroundColor: "#ffffff",
    height: 48,
    width: 48,
  },
  cardContent: {
    padding: theme.spacing(4),
  },
  colored: {
    backgroundColor: theme.palette.secondary.main,
  },
  contrastText: {
    color: "#fff",
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
      <Card className={`${styles[props.colored]}`}>
        <CardContent className={styles.cardContent}>
          <Grid container>
            {/* Title & money */}
            <Grid item xs={9}>
              <Grid container>
                <Box mb={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" className={`${styles[props.contrastText]}`}>
                      {props.title}
                    </Typography>
                  </Grid>
                </Box>
                <Grid item xs={12}>
                  <Typography variant="h5" className={`${styles[props.contrastText]}`}>
                    {props.number}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* Avatar */}
            <Grid item xs={3} className={styles.flex}>
              <Avatar className={`${styles[props.dot]}`}>{props.icon}</Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
