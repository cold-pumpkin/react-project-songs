import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  // mapStateToProps에서 리턴한 this.props 가져와 렌더링
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary'>
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
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);