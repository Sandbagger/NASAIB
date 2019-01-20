import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
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


class SimpleModal extends Component {
  constructor(props){
    super(props);

}

componentDidUpdate(prevProps, prevState){
  if (prevProps !== this.props){
    console.log(this.props.location.search,) // "?filter=top&origin=im"
  }
 
   
  }


render(){
  
  
    return (<Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.isOpen}
        onClose={this.props.close}
      >
        <div style={getModalStyle()}  >
          <Typography variant="h6" id="modal-title">
            {this.props.title}
          </Typography>
          <img src='https://images-assets.nasa.gov/image/jsc2007e034221/jsc2007e034221~thumb.jpg' alt={this.props.title} />
          <Typography variant="subtitle1" id="simple-modal-description">
            Description
          </Typography>
          </div>
        </Modal>
    )
}
}

export default withStyles(styles)(withRouter(SimpleModal));

