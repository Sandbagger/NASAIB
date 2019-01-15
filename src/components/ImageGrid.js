import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

function ImageGrid(props) {
  
    return (
      <div>
        <GridList cellHeight={160} cols={3}>
          {props.tileData.map(tile => (
            <GridListTile key={tile.urls} cols={tile.cols || 1}>
              <img src={tile.urls} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  export default ImageGrid;