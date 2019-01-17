import React, {Component} from 'react';
import Form from './Form.js';
import ImageGrid from './ImageGrid'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { 
    BrowserRouter as Router, 
    Switch,
    Route,
    Redirect } from 'react-router-dom';
import Asset from './Asset';

const style = {
    minHeight: "500px",
    minWidth: "300px",
    marginTop: "3em",
    padding: "3em",
    textAlign: 'center',
    display: 'inline-block',
  };

class FetchNASA extends Component {
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
        this.fetchImages()
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevState.input !== this.state.input){
            this.fetchImages()
        }
        if (prevState.urls !== this.state.urls){
            console.log(this.state.urls)
        }
        if (prevState.open !== this.state.open){
            console.log("open changed")
        }
    }

    handleInput(e) {
        console.log(e.target.value)
        this.setState({input: e.target.value});
        
    }

    async fetchImages(){
        let input = this.state.input || 'launch'
       let url = 'https://images-api.nasa.gov/search?q=' + input + '&media_type=image'
        let res = await fetch(url)
        let data = await res.json();
        let arr = data.collection.items.slice(0,21)
        let update = arr.map(item => {
           return  {
                        urls: item.links[0].href,
                        title: item.data[0].title,
                        description: item.data[0].description,
                        nasaid: item.data[0].nasa_id
                }
            })
       
        this.setState({urls:update})
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
          debugger
        this.setState({ open: false });
      };
    

    render(){
        return (
            <Router>
                <Grid container 
                  justify = "center"
                  direction = "column"
                  spacing = {16}>
             
                 <Redirect from="/" exact to="/search"/>
                    <Grid item>
                        <Form onInput={this.handleInput}
                            input={this.state.input} />
                    </Grid>
                    <Grid item>
                     <Switch>
                          <Route path="/search" render={()=>(<ImageGrid tileData={this.state.urls}
                        open={this.handleOpen}
                        isOpen={this.state.open}
                            close={this.handleClose}
                          />)}/>
                         <Route path="/asset" component={Asset}/>
                     </Switch>
                    
                    </Grid>
                    
                </Grid>
                </Router>
        )
    }
}

export default FetchNASA;