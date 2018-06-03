import React from 'react'

import './CSS/input-field.css'



const InputField = ( props ) => {
  const { refValue, idValue, typeValue, requiredValue, labelText, spanWidth } = props
  return (
    <div className='input-wrapper'>
      <input ref={ refValue } id={ idValue } type={ typeValue } required={ requiredValue } name={ idValue } />
      <label htmlFor={ idValue }>{ labelText }</label>
      <span className='line' style={{ width: spanWidth || 60 }}></span>
    </div>
  )
}

export default InputField
