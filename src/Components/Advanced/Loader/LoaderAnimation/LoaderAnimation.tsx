import React from 'react'

// Style
import Style from './LoaderAnimation.module.css'
const LoaderAnimation: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.loader}>
        <div className={Style.face}>
          <div className={Style.circle}></div>
        </div>
        <div className={Style.face}>
          <div className={Style.circle}></div>
        </div>
      </div>
    </div>
  )
}

export default LoaderAnimation
