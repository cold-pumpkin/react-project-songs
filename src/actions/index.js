// Action Creator 정의

// Action 1) 곡 선택하기
export const selectSong = (song) => {  // Named export : 하나의 파일에서 여러 함수 export 하는 경우 사용
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};