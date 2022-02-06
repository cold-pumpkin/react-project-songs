import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({song}) => {  // props에서 destructuring
  if (!song) {  // 첫 렌더링 시 song이 null 인 경우
    return <div>Select a Song!</div>
  }
  
  return (
    <div>
      <h3>Details for :</h3>
      <p>
        Title : {song.title}
        <br />
        Durations : {song.duration}
      </p>
    </div>
  );
}

// 모든 state 정보를 가져와 필요한 정보만 리턴하여 props에 매핑
const mapStateToProps = (state) => {
  // combineReducers 에서 key 값으로 가져오기
  return { song : state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
// SongDetail 컴포넌트 내부에서 props로 접근 가능해짐
