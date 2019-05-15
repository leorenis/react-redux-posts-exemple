export const songsReducer = () => {
  return [
    { id: 1, title: 'No Scrubs', duration: '4:05' },
    { id: 2, title: 'Macarena', duration: '2:30' },
    { id: 3, title: 'All Star', duration: '3:14' },
    { id: 4, title: 'I Want it That Way', duration: '1:45' }
  ]
}

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}
