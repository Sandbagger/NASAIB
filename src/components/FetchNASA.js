import React, {Component} from 'react';
import Form from './Form.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
            urls: []
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.input !== this.state.input){
            this.fetchImages()
        }
        if (prevState.urls !== this.state.urls){
            console.log(this.state.urls)
        }
    }

    handleInput(e) {
        console.log(e.target.value)
        this.setState({input: e.target.value});
        
    }

    async fetchImages(){
       let url = 'https://images-api.nasa.gov/search?q=' + this.state.input + '&media_type=image'
        let res = await fetch(url)
        let data = await res.json();
        this.setState({urls:{
            urls: data.collection.items[0].href,
            title: data.collection.items[0].data[0].title,
            description: data.collection.items[0].data[0].description
        }})
    }

    render(){
        return (
            <Paper
              style={style}
              elevation={12}>
                <Grid container 
                  justify = "center"
                  direction = "column"
                  spacing = {16}>
             
                    <Grid item>
                        <Form onInput={this.handleInput}
                            input={this.state.input} />
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default FetchNASA;