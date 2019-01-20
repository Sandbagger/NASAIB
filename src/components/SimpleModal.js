import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import queryString from 'query-string';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});


function SimpleModal(props){
  const { classes } = props;

    return (<Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.isOpen}
        onClose={props.close}
      >
        <div style={getModalStyle()}  className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {props.title}
          </Typography>
          <img src='https://images-assets.nasa.gov/image/jsc2007e034221/jsc2007e034221~thumb.jpg' alt={props.title} />
          <Typography variant="subtitle1" id="simple-modal-description">
            {props.description}
          </Typography>
          </div>
        </Modal>
    )
}

export default withStyles(styles)(SimpleModal);

