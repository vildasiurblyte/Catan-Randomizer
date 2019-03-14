
/* const tiles = ['hills', 'forest', 'mountains', 'fields', 'pasture', 'desert'];

function chooseRandomTile() {
  const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
  console.log(randomTile);
  console.log(typeof randomTile);
  return randomTile;
}
chooseRandomTile(); */

//module.exports.chooseRandomTile = chooseRandomTile;

//const classes = ['hills', 'forest', 'mountains', 'fields', 'pasture', 'desert'];

const classes = ['hills', 'forest', 'mountains', 'fields', 'pasture', 'desert'];

const values = {
  'hills': 3,
  'forest': 4,
  'mountains': 3,
  'fields': 4,
  'pasture': 4,
  'desert': 1
}


function addRandomClass() {
  const randomArr = Object.keys(values);
  const randomClass = randomArr[Math.floor(Math.random() * randomArr.length)];
  values[randomClass] -= 1;
  if (values[randomClass] === 0) delete values[randomClass];
}
addRandomClass();





