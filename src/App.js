import React, { Component } from 'react';
import './App.css';
import { 
    Switch,
    Route,
    Redirect,
  withRouter } from 'react-router-dom';
import Form from './components/Form.js';
import ImageGrid from './components/ImageGrid';
import SimpleModal from './components/SimpleModal';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Asset from './components/Asset';
import Navbar from './components/Navbar';


const style = {
  minHeight: "500px",
  minWidth: "300px",
  marginTop: "3em",
  padding: "3em",
  textAlign: 'center',
  display: 'inline-block',
};

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          input: "",
          urls: [],
          open: false
      }
      this.handleInput = this.handleInput.bind(this);
      this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount(){
    this.props.history.push('/search');
      this.fetchImages()
  }
  
  componentDidUpdate(prevProps, prevState){
      if (prevState.input !== this.state.input){
          this.fetchImages()
      }
  
  }

  handleInput(e) {
      this.setState({input: e.target.value});
      
  }

  async fetchImages(){
      let input = this.state.input || 'launch'
     let url = 'https://images-api.nasa.gov/search?q=' + input + '&media_type=image'
      let res = await fetch(url)
      let data = await res.json();
      let arr = data.collection.items.slice(0,21)
      var update = {};
      arr.map(item => update[item.data[0].nasa_id] =  {
                      url: item.links[0].href,
                      title: item.data[0].title,
                      description: item.data[0].description
          })
     
      this.setState({urls:update})
      console.log(update)
  }

  handleOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
       
      this.setState({ open: false });
      this.props.history.push('/search')
    };
  

  render(){
      return (
         <div>
              <Navbar/>
              <Grid container 
                justify = "center"
                direction = "column"
                spacing = {16}>
           
           
                  <Grid item>
                      <Form onInput={this.handleInput}
                          input={this.state.input} />
                  </Grid>
                  <Grid item>
                 
                       <ImageGrid tileData={this.state.urls}
                      open={this.handleOpen}
                      isOpen={this.state.open}
                          close={this.handleClose}
                        />)

                       {!this.state.urls.length && <Route path="/asset/:nasaid" 
                      render={props => (
                        <SimpleModal
                         isOpen={this.state.open}
                         close={this.handleClose}
                         data={this.state.urls} />)}
                        />}
                  </Grid>
                  
              </Grid>
              </div>
      )
  }
}
export default withRouter(App);
