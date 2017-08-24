import React from 'react'
import MockModalContainer from './MockModalContainer'

import {
  Modal,
  Button,
  Input
} from 'semantic-ui-react'


export default function ItemModal() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px'
    }}>
      <Modal className="ListItemModal" trigger={<Button content='显示长按项目提示的Modal' />} >
        <Modal.Content>
          <Button id="completeBtn" fluid color='green' >
            完成|未完成
          </Button>

          <p></p>

          <Button id="topBtn" fluid color='orange' >
            置顶|取消置顶
          </Button>

          <p></p>

          <Button id="moreBtn" fluid color='grey' >更多</Button>

          <p></p>

          <Button id="deleteBtn" fluid color='red' >
            删除|恢复
          </Button>

          <p></p>

          <Button id="completeDeleteBtn" fluid color='red' >
            完全删除
          </Button>

          <p></p>

          <Button id="cancelBtn" fluid >返回</Button>
        </Modal.Content>
      </Modal>

      <Modal trigger={<Button content='显示确认Modal' />} >
        <Modal.Content>
          <h4 className='center'>
            提示内容
          </h4>
        </Modal.Content>
        <Modal.Actions className='center'>
          <Button color='red' >
            返回
          </Button>
          <Button color='green' >
            确认
          </Button>
        </Modal.Actions>
      </Modal>

      <Modal trigger={<Button content='显示提示输入Modal' />} >
					<Modal.Content>
						<h5>
							提示内容
						</h5>
						<Input id="targetsManagement-prompt" fluid focus />
					</Modal.Content>
					<Modal.Actions>
						<Button color='red' >
							返回
      			</Button>
						<Button color='green' >
							确认
      		</Button>
					</Modal.Actions>
				</Modal>

    </div>
  )
}