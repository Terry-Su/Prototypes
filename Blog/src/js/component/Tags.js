import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Chip from 'material-ui/Chip'

const styles = theme => {
  console.log(1, theme)
  return ({
    chip: {
      backgroundColor: '#d2eafb',
      color: '#108ee9'
    }
  })
};


export default withStyles(styles)(Tags)

function Tags({
  classes
}) {
  return (
    <div style={{
      padding: '10px'
    }}>
      {
        [...'12345'].map((v, i) => <Tag key={i} classes={classes} color={'blue'}>标签{v}</Tag>)
      }
    </div>
  )
}


function Tag({ color, children, classes }) {
  console.log(classes)
  return (
    <span style={{
      display: 'inline-block',
      padding: '5px'
    }} >
      <Chip label={children} className={classes.chip}/>
    </span>
  )
}

