var playlist = {
  'Neil Diamond': 'Red Wine'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}