import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import SimpleModal from './SimpleModal';
import {Link, Route} from 'react-router-dom';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

function ImageGrid(props) {
    const getGridListCols = () => {
        if (isWidthUp('xl', props.width)) {
          return 4;
        }
    
        if (isWidthUp('lg', props.width)) {
          return 3;
        }
    
        if (isWidthUp('md', props.width)) {
          return 2;
        }
    
        return 1;
      }

      const { classes } = props;
      
    return (
      <div>
        <GridList cellHeight={100} cols={getGridListCols()} spacing={12}>
        {Object.entries(props.tileData).map(tile => (
          
          <GridListTile key={tile[0]} cols={1}>
            <img src={tile[1].url} alt={tile[1].title} />
            <GridListTileBar
            title={tile[1].title}
            actionIcon={
              <Link to={`/asset/${tile[0]}`}><IconButton className={classes.icon}
              onClick={props.open}>
                <InfoIcon/>
              </IconButton>
              </Link> }
            />
            
            </GridListTile>
             
               
                
            )
          
          )}
          
        </GridList>
      </div>
    );
  }

  export default withStyles(styles)(withWidth()(ImageGrid));