var playlist = {name: 'title'}

function updatePlaylist(obj, name, title) {
  return Object.assign({}, obj, {[name]: title})
}