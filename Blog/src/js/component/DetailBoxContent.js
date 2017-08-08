import React from 'react'
import htmlContent from '../tmpData/htmlContent'

export default function DetailBoxContent() {
	return (
		<div  className='highlight' dangerouslySetInnerHTML={{__html: htmlContent}}>
		</div>
	)
}