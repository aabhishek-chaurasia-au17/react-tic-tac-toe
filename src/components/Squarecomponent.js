import React from 'react'

const Squarecomponent = ({className, state, onClick}) => {
    const classes = className?`${className} square`: `square`
  return (<>
        <span className={classes} onClick={onClick}>{state}</span>
    </>
  )
}

export default Squarecomponent