var playlist = {name: 'title'}

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle
  return obj
}

function removeFromPlaylist(obj, artistName) {
  return delete obj.artistName;
}