import React from 'react'

export default function Child2(props) {
    console.log(props)
  return (
    <div>
      <p>Name is {props.namelist}.</p>
      <p>Age is {props.ageList}.</p>
    </div>
  )
}