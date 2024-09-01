import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const url = (name: string, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`

function App() {
  const sectionRef = useRef<HTMLHeadingElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const initObserver = () => {
      const section = sectionRef.current

      if (!section) {
        console.error('Section element is not available')
        return
      }

      const messageObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setShow(!show)
          console.log('Element is in view')
        } else {
          setShow(false)
          console.log('Element is out of view')
        }
      })

      messageObserver.observe(section)

      return () => {
        messageObserver.unobserve(section)
      }
    }

    const timeoutId = setTimeout(initObserver, 100)

    return () => {
      clearTimeout(timeoutId) // Cleanup timeout
    }
  }, [])

  console.log(show)

  return (
    <div>
      <Parallax
        pages={2}
        style={{ top: '0', left: '0', backgroundColor: '#28282B' }}
      >
        <ParallaxLayer
          offset={1}
          speed={-0.3}
          style={{ pointerEvents: 'none' }}
        >
          <img
            src={url('satellite4')}
            style={{
              width: '15%',
              marginLeft: '-70%',
              transform: 'rotate(270deg)',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          sticky={{ start: -1, end: 0 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          speed={0.2}
        >
          <h1
            style={{
              fontSize: '6rem',
              fontFamily: 'monospace',
              textShadow: '2px 2px 8px #1B1212',
            }}
          >
            Welcome!
          </h1>
        </ParallaxLayer>
        {/* ------------------- first section ---------------------------- */}
        <ParallaxLayer offset={0.1} speed={0.5} style={{ opacity: 0.7 }}>
          <div>
            <h1 style={{ color: 'purple' }}>Bente Cinco</h1>
            <h2
              style={{
                display: 'block',
                width: '25%',
                marginLeft: '70%',
                color: 'orange',
              }}
            >
              Dalawampu't Lima
            </h2>
            <h3
              style={{
                display: 'block',
                width: '50%',
                marginLeft: '-10%',
                color: 'yellow',
              }}
            >
              Random Text
            </h3>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.6} style={{ opacity: 0.1 }}>
          <h1>Bente Cinco</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.3} style={{ opacity: 0.4 }}>
          <h1
            style={{
              display: 'block',
              width: '15%',
              marginLeft: '80%',
              fontSize: '2rem',
              color: 'green',
            }}
          >
            Text One
          </h1>
          <h1
            style={{
              display: 'block',
              width: '50%',
              marginLeft: '0%',
              fontSize: '2.5rem',
              color: 'red',
            }}
          >
            Text Two
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.35} style={{ opacity: 0.1 }}>
          <h1
            style={{
              display: 'block',
              width: '15%',
              marginLeft: '80%',
              fontSize: '2rem',
            }}
          >
            Text One
          </h1>
          <h1
            style={{
              display: 'block',
              width: '50%',
              marginLeft: '0%',
              fontSize: '2.5rem',
            }}
          >
            Text Two
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.2} style={{ opacity: 0.5 }}>
          <h2
            style={{
              display: 'block',
              width: '35%',
              marginLeft: '56%',
              fontSize: '1rem',
              color: 'pink',
            }}
          >
            Text Three
          </h2>
          <h3
            style={{
              display: 'block',
              width: '25%',
              marginLeft: '30%',
              color: 'lightblue',
            }}
          >
            Twenty five
          </h3>
        </ParallaxLayer>
        {/* ----------------------------------------------- */}
        <ParallaxLayer offset={1} speed={0.5}>
          <div>
            <h1
              ref={sectionRef}
              style={{ marginBottom: '4rem', fontSize: '3rem' }}
            >
              Games
            </h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              <div className={`seventeen  ${show && 'show-hangman'} `}>
                <h1>Hangman: Seventeen</h1>
                <p>
                  Hangman is a word-guessing game about Seventeen, the K-pop boy
                  band, and their songs. Each wrong guess adds a part to a
                  stickman, and the game ends when the stickman is fully drawn.
                </p>
                <button
                  className='btn'
                  onClick={() => {
                    window.location.href =
                      'https://hangman-seventeen.netlify.app/'
                  }}
                >
                  Play Hangman
                </button>
              </div>
              <div className={`infinite  ${show && 'show-quiz'} `}>
                <h1>Quiz: Infinite</h1>
                <p>
                  This is a quiz game about Infinite. Answer questions about the
                  group, their members, and their songs. Test your knowledge and
                  see how much you know about Infinite!
                </p>
                <button
                  className='btn'
                  onClick={() => {
                    window.location.href =
                      'https://harmonious-pithivier-c342a5.netlify.app'
                  }}
                >
                  Play Quiz
                </button>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
