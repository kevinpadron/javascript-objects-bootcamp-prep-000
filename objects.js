var playlist = {name: 'title'}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName]: songTitle})
}