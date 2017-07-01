import React from 'react'
import { 
  Dropdown,
  Button, 
  Flag 
} from 'semantic-ui-react'



export default function Topbar() {
  return (
    <div style={{
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: '10px'
    }}>
      <Button.Group id="TopbarColumn">
        <Button basic >天</Button>
        <Button basic active >天</Button>
        <Button basic >天</Button>
        <Button basic >天</Button>
        <Dropdown text={'更多'} open button basic >
          <Dropdown.Menu>
            <Dropdown.Item text={'天'} />
            <Dropdown.Item text={'长期'} />
            <Dropdown.Item text={'长期'} />            
            <Dropdown.Item active text={'长期'} />            
            <Dropdown.Item text={'长期'} />
            <Dropdown.Item text={'长期'} />
            <Dropdown.Item text={'长期'} />
            <Dropdown.Item text={'长期'} />
            <Dropdown.Item active text={'时间轴'} />
            <Dropdown.Item active text={'时间轴'} />
            <Dropdown.Item active text={'导入数据'} />
            <Dropdown.Item active text={'导出数据'} />
            <Dropdown.Item className='center'>
              <Flag name='cn' />
              <Flag name='us' />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Button.Group>
    </div>
  )
}