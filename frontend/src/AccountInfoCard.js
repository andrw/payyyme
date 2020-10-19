import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Container } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import QRCode from "qrcode.react";

const useStyles = makeStyles({
  root: {
    width: 250,
    // height: 400,
  },
  media: {
    height: 100,
    backgroundSize: "contain",
  },
});

export default function AccountInfoCard(props) {
  const classes = useStyles();

  let qrImg;
  if (props.qrCodeUrl) {
    qrImg = (
      <QRCode
        value={props.qrCodeUrl}
        size={140}
        level={"H"}
        includeMargin={true}
      />
    );
  }

  let accountId;
  if (props.accountIdentifier) {
    accountId = (
      <Typography variant="h6">🦸🏻: {props.accountIdentifier}</Typography>
    );
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.imageUrl} />
        <CardContent>
          <Typography variant="h6">{props.accountType}</Typography>
          <Box align="center">
            {qrImg}
            {accountId}
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
