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
    height: 100,
  },
});

export default function ChaseCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.imageUrl} />
        <CardContent>
          <Typography variant="subtitle1">{props.accountType}</Typography>

          <Box align="center">
            <Typography variant="h6">🦸🏻: {props.accountIdentifier}</Typography>
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
