import React, { Component } from 'react';
import { withRouter,  Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';


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

class SimpleModal extends Component{
 constructor(props){
   super()
   this.state = {open: true}
 }

 componentDidMount() {
  const { match: { params } } = this.props;

  console.log(this.props.match.params);
}


 render(){
  const { classes } = this.props;
  const nasaid = this.props.match.params.nasaid;
  console.log(nasaid, 'test')
console.log(this.props)
    return (<Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.isOpen}
        onClose={this.props.close}
      >
        <div style={getModalStyle()}  className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {this.props.data[nasaid].title}
          </Typography>
          <img src={`https://images-assets.nasa.gov/image/${nasaid}/${nasaid}~thumb.jpg`} alt={this.props.title} />
          <Typography variant="subtitle1" id="simple-modal-description">
            {this.props.data[nasaid].description}
          </Typography>
          </div>
        </Modal>
    )
}
}

export default withStyles(styles)(withRouter(SimpleModal));

