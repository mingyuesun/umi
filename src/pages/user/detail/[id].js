import React from 'react'

function UserDetail(props) {
	console.log(props)
	return (
		<div>用户ID：{props.match.params.id}</div>
	)
}

export default UserDetail