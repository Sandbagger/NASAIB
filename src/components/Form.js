import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Form (props) {
        return (
            <Grid container 
                justify = "center"
                alignItems = "center"
                alignContent = "center"
                spacing = {16}>
                <Grid item>
                    <TextField
                        placeholder="Search for NASA images..."
                        inputProps={{maxLength: 40}}
                         type="text" 
                         onKeyPress={(e) => {
                             if(e.key === 'Enter') {
                                 console.log(this.state)}}
                             }
                         helperText={props.input.length + "/40"}
                         value ={props.input}
                         onChange={(e) => props.onInput(e)}
                        />
                </Grid>
               
            </Grid>
        )
    }



export default Form;