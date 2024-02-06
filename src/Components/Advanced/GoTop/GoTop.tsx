'use client'
import React, { useState, useEffect, useRef } from 'react'
import { BsArrowUp } from 'react-icons/bs'

import Style from './GoTop.module.css'

const GoTop = () => {
  const anything = useRef<HTMLDivElement | null>(null)
  const [arrow, setArrow] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        anything.current?.classList.remove(Style.topWrapperHide)
        anything.current?.classList.add(Style.topWrapper)
        setArrow(true)
      } else {
        anything.current?.classList.remove(Style.topWrapper)
        anything.current?.classList.add(Style.topWrapperHide)
        setArrow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={Style.wrapper}>
      <div ref={anything} onClick={scrollToTop}>
        <div className={Style.goTopIcon}>
          <BsArrowUp className={arrow ? Style.icon : Style.hideArrow} />
        </div>
      </div>
    </div>
  )
}

export default GoTop
