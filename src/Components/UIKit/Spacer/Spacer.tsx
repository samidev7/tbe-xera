import React from 'react'
// Style
import Style from './Spacer.module.css'

type SpacerProps = {
  className?: string
  small?: boolean
}
const Spacer: React.FC<SpacerProps> = ({ className, small }) => {
  return (
    <div>
      {small ? (
        <div className={className ? className : Style.smallWrapper}></div>
      ) : (
        <div className={className ? className : Style.wrapper}></div>
      )}
    </div>
  )
}

export default Spacer
