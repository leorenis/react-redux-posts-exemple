import { combineReducers } from 'redux'
import * as Songs from './songs'
import * as Posts from './posts'

export default combineReducers({
  songs: Songs.songsReducer,
  selectedSong: Songs.selectedSongReducer,
  posts: Posts.postsReducer
})
