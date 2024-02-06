import React from 'react'
// Components
import Container from '@/Components/UIKit/Container/Container'
import NumberCounter from '@/Components/UIKit/CounterNumber/CounterNumber'
import seedrandom from 'seedrandom'

// Data
import config from '@/data/config'

// Icons
import { FiArrowUpRight } from 'react-icons/fi'
// Style
import Style from './HeroSection.module.css'
const HeroSection = () => {
  function getRandomNumber(): number {
    const min = 5
    const max = 10

    // Get today's date in UTC
    const currentDate = new Date()
    const currentDateUTC = new Date(
      Date.UTC(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth(),
        currentDate.getUTCDate()
      )
    )

    // Convert the UTC date to a timestamp (milliseconds since January 1, 1970)
    const currentTime = currentDateUTC.getTime()

    // Use the timestamp as a seed for generating a random number
    const rng = seedrandom(currentTime.toString())
    const random: number = rng()

    // Scale the random number to the desired range
    const scaledRandom: number = random * (max - min) + min
    return Math.floor(scaledRandom)
  }

  return (
    <div className={Style.wrapper}>
      <div className={Style.leftSide}>
        <div className={Style.counterLeft}>
          <NumberCounter
            className={Style.number}
            startNumber={0}
            targetNumber={2}
            duration={2700}
            rightText="M+"
          />
          <p className={Style.numberText}>People Impacted</p>
        </div>

        <div className={Style.devider} />

        <div className={Style.counterLeft}>
          <NumberCounter
            className={Style.number}
            startNumber={0}
            targetNumber={100}
            duration={2000}
            rightText="+"
          />
          <p className={Style.numberText}>Countries Reached</p>
        </div>
      </div>
      <div className={Style.hero}>
        <h4 className={Style.miniTitle}>Embrace The Blockchain Era</h4>
        <h2 className={Style.title}>
          Unlock the Best <span className={Style.colorFulTitle}>Era</span> of
          your Life
        </h2>
        <a
          href={config.LOGIN_URL}
          target="_blank"
          className={Style.arrowButton}
        >
          <FiArrowUpRight className={Style.icon} />
        </a>
      </div>
      <div className={Style.rightSide}>
        <div className={Style.counterRight}>
          <NumberCounter
            className={Style.number}
            startNumber={0}
            targetNumber={getRandomNumber()}
            duration={2500}
            rightText="K+"
          />
          <p className={Style.numberText}>New users yesterday</p>
        </div>

        <div className={Style.deviderRight} />

        <div className={Style.counterRight}>
          <NumberCounter
            className={Style.number}
            startNumber={0}
            targetNumber={519}
            duration={2000}
            rightText="K+"
          />
          <p className={Style.numberText}>Community Members</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
