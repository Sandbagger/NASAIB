import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const NavBar = () => {
    return(
        <div>
        <AppBar 
            position="static">
            <Toolbar>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="title" color="inherit">
                             NASA Image Viewer
                        </Typography>
                        </Grid>
                        <Grid item>
                            <Button color="inherit" varient="contained" href=""> 
                                Github
                            </Button>
                        </Grid>
                </Grid>
              
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;