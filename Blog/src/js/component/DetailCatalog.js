import React, { Component } from 'react'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'


const styles = (theme) => ({
  common: {
    fontSize: '14px'
  },
  container: {
    // borderLeft: '1px solid #ddd',
    // borderRadius: '10px',
    padding: '10px',
  },
  h1: {

  },
  h2: {
    paddingLeft: '1em'
  }
})

class DetailCatalog extends Component {
  render() {
    const {
      classes
    } = this.props

    return (
      <div id="detailCatalog" className={`${classes.common} ${classes.container}`}>
        {
          [...'123'].map((v, i) => (
            <div key={i}>
              <h1 className={`${classes.common} ${classes.h1}`}>
                <b>Title{i}</b>
              </h1>
              {
                [...'123'].map((v, i) => (
                  <h2 key={i} className={`${classes.common} ${classes.h2}`}>
                    SubTitle{i}
                  </h2>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }
}


export default withStyles(styles)(DetailCatalog)