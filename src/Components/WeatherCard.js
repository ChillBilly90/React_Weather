import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";   

const WeatherCard = ({  }) => { 
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          Weather Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Detailed weather information will be displayed here.
        </Typography>
      </CardContent>
    </Card>
  );
} 