import React from 'react'

export default function Child(props) {
  console.log(props)
  return (
    <div>
      <p>This is {props.na} App.</p>
      <p>ReactJS compatibility with {props.age} Version.</p>
    </div>
  )
}

