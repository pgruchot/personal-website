const tilesArray = document.getElementsByClassName("tile");
export function tiles(direction) {
  if (direction) {
    for (let index = 0; index < tilesArray.length; index++) {
      let tile = tilesArray[index];
      setTimeout(function () {
        //console.log(tile);
        tile.classList.toggle("cover-tiles-disabled");
      }, index * 500);
    }
  } else {
    for (let index = tilesArray.length - 1; index >= 0; index--) {
      let tile = tilesArray[index];
      setTimeout(function () {
        //console.log(index);
        tile.classList.toggle("cover-tiles-disabled");
      }, 500 * (tilesArray.length - index - 1));
    }
  }
}
