import React from 'react'

function Studentdata(props) {
console.log("Welcome")
console.log(props)
  return (
    <div>
        <h2>{props.name}</h2>
    </div>
  )
}

export default Studentdata