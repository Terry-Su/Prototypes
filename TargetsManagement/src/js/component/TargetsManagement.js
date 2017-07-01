import React from 'React'

import Topbar from './Topbar'
import ItemContainer from './ItemContainer'
import Timeline from './Timeline'
import Recycle from './Recycle'
import Panel from './Panel'
import TimeSelector from './TimeSelector'
import Modals from './Modals'
import Caveat from './Caveat'


const TargetsManagement = () => {
  return (
    <div>
      <Topbar />

      <ItemContainer />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <Timeline />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <Recycle />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <Panel />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/>      

      <TimeSelector />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/>            

      <Modals />
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>                  

      <Caveat />
    </div>
  )
}


export default TargetsManagement