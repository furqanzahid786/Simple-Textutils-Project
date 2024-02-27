import React from 'react'

export default function Alert(props) {
  return (

    <div style={{height:'48px'}}>
    {props.alert && <div class="alert alert-primary alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}
