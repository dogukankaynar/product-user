import React from 'react'

function Button({type,classname}) {
  return (
    <>
        <button className={classname} type={type}>Ekle</button>
    </>
  )
}

export default Button