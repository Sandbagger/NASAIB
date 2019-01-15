import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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
    return (
      <div>
        <GridList cellHeight={160} cols={getGridListCols()}>
          {props.tileData.map(tile => (
            <GridListTile key={tile.urls} cols="1">
              <img src={tile.urls} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  export default withWidth()(ImageGrid);