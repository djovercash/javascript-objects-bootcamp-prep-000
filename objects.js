var playlist = {artistName: 'songTitle'};

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assigne({}, playlist, {[artistName: songTitle]});
};
