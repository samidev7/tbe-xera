import React from 'react'

// Style
import Style from './Container.module.css'

type ContainerProps = {
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={Style.container}>{children}</div>
}

export default Container
