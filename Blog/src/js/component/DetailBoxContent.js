import React from 'react'
import htmlContent from '../tmpData/htmlContent'

export default function DetailBoxContent() {
	return (
		<div id="detail" dangerouslySetInnerHTML={{__html: htmlContent}}>
		</div>
	)
}