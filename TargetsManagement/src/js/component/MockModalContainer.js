import React from 'react'


class MockModalContainer extends React.Component {
  render() {
    return (
      <div style={{
        width: '100%',
        padding: '20px',
        backgroundColor: 'rgba(0,0,0,0.85)'
      }}>
        <div style={{
          width: '80%',
          marginLeft: '10%',
          padding: '20px',
          backgroundColor: '#fff'
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default MockModalContainer