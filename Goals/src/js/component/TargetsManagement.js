import React from 'React'

import Topbar from './Topbar'
import ItemContainer from './ItemContainer'
import Timeline from './Timeline'
import Recycle from './Recycle'
import Panel from './Panel'
import TimeSelector from './TimeSelector'
import Modals from './Modals'
import Caveat from './Caveat'

const showSingle = /single/.test(window.location.href)


const TargetsManagement = () => {
  return (
    <div id="TargetsManagement">
      {
        showSingle &&
        <Panel />
      }
      {
        !showSingle &&
        <div>
          <Topbar />

          <ItemContainer />

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          <Timeline />

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          <Recycle />

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          <Panel />

          <br /><br /><br /><br /><br /><br /><br /><br /><br />

          <TimeSelector />

          <br /><br /><br /><br /><br /><br /><br /><br /><br />

          <Modals />

          <br /><br /><br /><br /><br />

          <Caveat />
        </div>
      }

    </div>
  )
}


export default TargetsManagement