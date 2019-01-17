import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      maxWidth: 500,
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
  };


function Asset(props){
        const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          </CardContent>
          <CardMedia
          component="img"
        alt={props.title}
          className={classes.media}
          height="140"
          image={props.url}
          title={props.title}
        />
         <CardContent>
          <Typography component="p">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    )
}

export default withStyles(styles)(Asset);