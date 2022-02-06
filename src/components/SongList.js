import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  // mapStateToProps에서 리턴한 this.props 가져와 렌더링
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button 
              className='ui button primary'
              onClick={() => {this.props.selectSong(song)}} 
              // 클릭 시 Action 동작
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render () {
    return <div className='ui divided list'>{this.renderList()}</div>
  }
}

// Redux Store의 모든 state 정보 가져오기 : connect(state 가져올 함수)(현재 컴포넌트)
// 렌더링 or Redux Store 정보 바뀌면 재실행 됨
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

// connect(state 가져올 함수, { action creator })(현재 컴포넌트)
// action creator Object key-value 같은 경우 하나로 생각 가능 (ES6)
export default connect(
  mapStateToProps, 
  { selectSong }  // {Action Creators} -> props.selectSong() 호출할 때마다 dispatch 해줌
)(SongList);  