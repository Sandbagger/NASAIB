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
            input: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }


    handleInput(e) {
        console.log(e.target.value)
        this.setState({input: e.target.value});
        
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