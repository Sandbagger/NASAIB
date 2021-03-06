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
import {Link} from 'react-router-dom';

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
          {props.tileData.map(tile => {
            return (
              <GridListTile key={tile.urls} cols={1}>
                <img src={tile.urls} alt={tile.title} />
                <GridListTileBar
                title={tile.title}
                actionIcon={
                  <Link to={`/asset?id=${':' + tile.nasaid}`}><IconButton className={classes.icon}
                  onClick={props.open}>
                    <InfoIcon/>
                  </IconButton>
                  </Link>
                }
              />
              <SimpleModal
                isOpen={props.isOpen}
                close={props.close}
                title={tile.title}
                description={tile.description}
                url={tile.urls}
              />
              </GridListTile>
               
                
            )
          }
          )}
          
        </GridList>
      </div>
    );
  }

  export default withStyles(styles)(withWidth()(ImageGrid));