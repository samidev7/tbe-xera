'use client'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
// Style
import Style from './CookieManager.module.css'
const COOKIE_NAME = 'token'

const CookieManager: React.FC = () => {
  const [showCookieManager, setShowCookieManager] = useState(false)

  useEffect(() => {
    const hasTokenCookie = Cookies.get(COOKIE_NAME)
    setShowCookieManager(!hasTokenCookie)
  }, [])

  const setCookie = () => {
    Cookies.set(COOKIE_NAME, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', {
      expires: 7,
    })
    setShowCookieManager(false)
  }

  // Method to remove data from cookies
  const removeCookie = () => {
    Cookies.remove(COOKIE_NAME)
    setShowCookieManager(false)
  }

  if (!showCookieManager) {
    return null
  }

  return (
    <div className={Style.wrapper}>
      <div className={Style.cookies}>
        <p className={Style.text}>
          We use cookies to offer a better browsing experience, analyze site
          traffic, personalize content, and serve targeted advertisements.By
          clicking accept.
        </p>
        <div className={Style.buttonWrapper}>
          <button onClick={setCookie} className={Style.buttonAccept}>
            Confirm all
          </button>
          <button onClick={removeCookie} className={Style.buttonAccept}>
            Reject Cookies
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieManager
