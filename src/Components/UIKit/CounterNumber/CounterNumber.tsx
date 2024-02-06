'use client'
import React, { useState, useEffect } from 'react'

interface NumberCounterProps {
  rightText?: string
  leftText?: string
  className?: string
  startNumber: number
  targetNumber: number
  duration: number // Animation duration in milliseconds
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  startNumber,
  targetNumber,
  duration,
  className,
  rightText,
  leftText,
}) => {
  const [currentNumber, setCurrentNumber] = useState(startNumber)

  useEffect(() => {
    let startTime: number
    const updateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const updatedNumber = Math.round(
        progress * (targetNumber - startNumber) + startNumber
      )
      setCurrentNumber(updatedNumber)
      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      }
    }

    requestAnimationFrame(updateNumber)

    return () => {
      // Cleanup if the component unmounts before the animation completes
      setCurrentNumber(startNumber)
    }
  }, [startNumber, targetNumber, duration])

  return (
    <div className={className}>
      {leftText}
      {''}
      {currentNumber}
      {''}
      {rightText}
    </div>
  )
}

export default NumberCounter
