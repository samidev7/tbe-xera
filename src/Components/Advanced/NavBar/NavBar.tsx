'use client'
import { useState } from 'react'

// Component
import Link from 'next/link'
import Container from '../../UIKit/Container/Container'
import Image from 'next/image'

// Data
import config from '@/data/config'

// Hooks
import useWindowSize from '@/Hooks/useWindowSize'
// Icons
import { IoIosArrowDown } from 'react-icons/io'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

// Images
import LogoHalf from '@/Assets/images/blokchainEraLogoHAlf.png'
import Logo from '@/Assets/logos/Logo.svg'
import HeadSet from '@/Assets/icons/headSet.svg'

// Styles
import Style from './NavBar.module.css'

const dropDownOne = [
  {
    title: 'Products',
    link: '/products',
  },
  {
    title: 'Services',
    link: '/services',
  },
]

const twoDropDown = [
  {
    title: 'Login',
    link: config.LOGIN_URL,
  },
  {
    title: 'Register',
    link: config.REGISTER_URL,
  },
]
const Navbar = () => {
  const { width } = useWindowSize()
  return (
    <header>{width && width > 1223 ? <DeskTopNav /> : <MobileNav />}</header>
  )
}
const DeskTopNav = () => {
  return (
    <Container>
      <div className={Style.navbar}>
        <Link href="/" className={Style.logo}>
          <Image src={Logo} alt="" />
        </Link>
        <div className={Style.links}>
          <Link href="/about">About</Link>
          <div className={Style.product}>
            <h6>
              Discover New Era <IoIosArrowDown className={Style.dropDownIcon} />
            </h6>
            <div className={`${Style.productLinks}`}>
              {dropDownOne.map((item, index) => (
                <div key={index} className={Style.productLink}>
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
            </div>
          </div>
          <Link href="/events">Events</Link>
          {/* <Link href="/legal-resources">Legal Resources</Link> */}
        </div>
        <div className={Style.authButtons}>
          <div className={Style.product}>
            <h6 className={Style.loginWrapper}>
              Access Portal <IoIosArrowDown className={Style.dropDownIcon} />
            </h6>
            <div className={Style.productLinks}>
              {twoDropDown.map((item, index) => {
                return (
                  <div key={index} className={Style.productLink}>
                    <a target="_blank" href={item.link}>
                      {item.title}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <a
            target="_black"
            className={Style.contactButton}
            href="https://support.tbe.io"
          >
            <TfiHeadphoneAlt className={Style.headSetIcon} />
            Contact Support
          </a>
        </div>
      </div>
    </Container>
  )
}

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { width } = useWindowSize()

  const [dropDown, setDropDown] = useState(false)
  const [dropDownTwo, setDropDownTwo] = useState(false)

  if (typeof document !== 'undefined') {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <nav>
      <div className={Style.navbar}>
        <div
          className={menuOpen ? Style.navWrapperOpen : Style.navWrapperClosed}
        >
          <div className={Style.navbarMobile}>
            <Container>
              <div className={Style.mobileNavHeader}>
                <Link onClick={() => setMenuOpen(false)} href="/">
                  <Image
                    src={width && width < 576 ? LogoHalf : Logo}
                    alt=""
                    className={Style.logoImage}
                  />
                </Link>
                <div
                  className={menuOpen ? Style.hamburgerActive : Style.hamburger}
                  onClick={() => {
                    setMenuOpen((old) => !old)
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </Container>

            {menuOpen && (
              <div className={Style.mobileLinksWrapper}>
                <div className={Style.mobileLinks}>
                  <Link onClick={() => setMenuOpen(false)} href="/about">
                    About
                  </Link>
                  <div className={Style.Mobileproduct}>
                    <h6
                      onClick={() => setDropDown(!dropDown)}
                      className={`${
                        dropDown
                          ? Style.productMobileDisActive
                          : Style.productMobileActive
                      }`}
                    >
                      Discover New Era{' '}
                      <IoIosArrowDown className={Style.dropDownIcon} />
                    </h6>
                    <div
                      className={`${
                        dropDown
                          ? Style.productNoLinksWrapper
                          : Style.productLinksWrapper
                      }`}
                    >
                      {dropDownOne.map((item, index) => {
                        return (
                          <div key={index} className={Style.productLinksMobile}>
                            <Link
                              href={item.link}
                              onClick={() => setMenuOpen(false)}
                            >
                              <p>{item.title}</p>
                            </Link>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <Link onClick={() => setMenuOpen(false)} href="/events">
                    Events
                  </Link>
                  <div>
                    <h6
                      onClick={() => setDropDownTwo(!dropDownTwo)}
                      className={`${
                        dropDownTwo
                          ? Style.productMobileDisActive
                          : Style.productMobileActive
                      }`}
                    >
                      Access Portal
                      <IoIosArrowDown className={Style.dropDownIcon} />
                    </h6>
                    <div
                      className={`${
                        dropDownTwo
                          ? Style.productNoLinksWrapper
                          : Style.productLinksWrapper
                      }`}
                    >
                      {twoDropDown.map((item, index) => {
                        return (
                          <a
                            key={index}
                            className={Style.productLinksMobile}
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                          >
                            <p>{item.title}</p>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                  <a
                    target="_black"
                    className={Style.contactButton}
                    href="https://support.tbe.io"
                  >
                    <TfiHeadphoneAlt className={Style.headSetIcon} />
                    Contact Support
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
