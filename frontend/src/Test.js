import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import ChaseCard from "./ChaseCard";
import VenmoCard from "./VenmoCard";
import MyAppBar from "./MyAppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  //   const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  //   const handleChange = (event) => {
  //     setSpacing(Number(event.target.value));
  //   };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <MyAppBar />
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {/* {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))} */}
          <Grid item>
            <ChaseCard
              accountType="Chase QuickPay (Zelle)"
              accountIdentifier="650-387-1383"
              imageUrl="/logos/chase.png"
            />
          </Grid>
          <Grid item>
            <ChaseCard
              accountType="Venmo"
              accountIdentifier="@andrwyng"
              imageUrl="/logos/venmo.png"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
