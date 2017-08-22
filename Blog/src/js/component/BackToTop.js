import React from 'react'

import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder';

export default class BackToTop extends React.Component {
  render() {
    return (
      <div>
        <Avatar
          style={{
            color: 'white',
            background: '#50aef2'
          }}
          children={
            <FolderIcon />
          }
        />
      </div>
    )
  }
}