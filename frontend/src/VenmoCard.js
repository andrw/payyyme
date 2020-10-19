import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 350,
  },
  media: {
    minHeight: 100,
  },
});

export default function ChaseCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/logos/venmo.png"
          title="Venmo Logo"
        />
        <CardContent>
          <Typography variant="subtitle1">Venmo</Typography>

          <Box align="center">
            <Typography variant="subtitle1">🦸🏻: @andrwyng</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" color="primary" size="small">
          Copy
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
