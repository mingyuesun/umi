import React from 'react'
import { history } from 'umi'
import Layouts from '../layouts'

function Foo() {
	return (
		<Layouts>
			<h1>Foo</h1>
			<button onClick={() => history.goBack()}>返回</button>
		</Layouts>
	)
}

export default Foo