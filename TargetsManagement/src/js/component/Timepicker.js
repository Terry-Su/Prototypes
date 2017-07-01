import React, { Component } from 'react'

// datepicker
import 'rmc-picker/assets/index.css'
import 'rmc-date-picker/assets/index.css'
import DatePicker from 'rmc-date-picker/lib/DatePicker'
import moment from 'moment'
import zhCn from 'rmc-date-picker/lib/locale/zh_CN'
// import enUS from 'rmc-date-picker/lib/locale/en_US'
import 'moment/locale/zh-cn.js'


export default function Timepicker() {

  return (
    <div style={{ margin: '10px 30px' }}>
      <div>
        <DatePicker
          rootNativeProps={{ 'data-xx': 'yy' }}
          mode={'datetime'}
          locale={zhCn}
        />
      </div>
    </div>
  )
}