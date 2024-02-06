import React from 'react'

// Styles
import Style from './Separator.module.css'

type SeparatorProps = {
  isVertical?: boolean
  color?: string
}

const Separator: React.FC<SeparatorProps> = ({
  isVertical = false,
  color = '#0C0C0C',
}) => {
  return (
    <div
      className={
        isVertical ? Style.separatorVertical : Style.separatorHorizontal
      }
      style={{ background: color }}
    ></div>
  )
}

export default Separator
