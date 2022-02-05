// Reducers 정의
import { combineReducers } from 'redux';

// Reducer 1) 곡 리스트 리턴
const songsReducer = () => {
  return [
    { title: '12:45(Stripped)', duration: '3:00' },
    { title: 'abcdefu', duration: '2:49' },
    { title: 'Levitating', duration: '3:24' },
    { title: 'Levitating', duration: '3:24' },
    { title: 'Hush Hush', duration: '3:04' },
  ];
};

// Reducer 2) 선택된 곡 리턴
const selectedSongReducer = (selectedSong = null, action) => {  // 기존에 선택된 곡은 default 값을 null 셋팅
  if (action === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});