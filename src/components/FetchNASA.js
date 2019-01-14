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
            todo: []
        }
    }

    componentWillMount(){
       
    };


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
                        <Form/>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default FetchNASA;