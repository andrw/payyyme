import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import SimpleCard from "./SimpleCard";
import { ChaseCard } from "./ChaseCard";
import { Route, NavLink, Link, BrowserRouter } from "react-router-dom";
import SpacingGrid from "./Test";

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

export default function App() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    // Anything in the UI here is rendered for ALL pages.
    <React.StrictMode>
      <BrowserRouter>
        {/* This creates the server connection. */}
        <Route path="/SimpleCard" component={SimpleCard} />
        <Route path="/test" component={SpacingGrid} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
