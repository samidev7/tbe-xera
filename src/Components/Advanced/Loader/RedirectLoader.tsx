'use client'
import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import Style from './Loader.module.css'

type LoaderProps = {
  children: React.ReactNode // Change "Children" to "children"
}

const RedirectLoader: React.FC<LoaderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (loading) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }
  }, [loading])

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      setLoading(false)
    }, 5100)
  }, [])

  return (
    <div className={Style.loaderWrapper}>
      {loading ? (
        <div className={Style.loaderContainer}>
          <Loader />
        </div>
      ) : (
        children // Use "children" here
      )}
    </div>
  )
}

export default RedirectLoader
