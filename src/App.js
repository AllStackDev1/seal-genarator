/* eslint-disable space-before-function-paren */
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import CircleType from 'circletype'
import './App.css'

const App = forwardRef((props, ref) => {
  const [companyName, setCompanyName] = useState('')
  const [companyRegNumber, setCompanyRegNumber] = useState('')
  const [color, setColor] = useState('#dc143c')
  const [fontFamily, setFontFamily] = useState('"Times New Roman"')

  useEffect(() => {
    let mounted = true
    if (mounted) {
      const ele1 = [...document.getElementsByClassName('inside-content-text-1')]
      ele1.forEach(e => {
        const circleType1 = new CircleType(e)
        circleType1.radius(130)
      })

      const ele2 = [...document.getElementsByClassName('inside-content-text-2')]
      ele2.forEach(e => {
        const circleType2 = new CircleType(e)
        circleType2.radius(130).dir(-1)
      })
    }
    return () => (mounted = false)
  }, [companyName, companyRegNumber, color, fontFamily])

  useImperativeHandle(ref, () => ({
    setCompanyName(val) {
      setCompanyName(val)
    },
    setCompanyRegNumber(val) {
      setCompanyRegNumber(val)
    },
    setColor(val) {
      setColor(val)
    },
    setFontFamily(val) {
      setFontFamily(val)
    }
  }))

  return (
    <div
      className='content'
      style={{
        fontFamily: props.fontFamily || fontFamily,
        color: props.color || color
      }}
    >
      <div id='outer-circle1' style={{ borderColor: props.color || color }}>
        <div id='inner-circle1' style={{ borderColor: props.color || color }}>
          <span className='inside-content-text-1'>
            {props.companyName || companyName}
          </span>
          <div id='outer-circle2' style={{ borderColor: props.color || color }}>
            <div id='inner-circle2' style={{ borderColor: props.color || color }}>
              <div
                id='inside-content2'
                style={{ fontFamily: props.innerText?.fontFamily || 'cursive' }}
              >
                <span id='the'>The</span>
                <span id='common'>Common</span>
                <span id='seal'>Seal</span>
                <span id='of'>Of</span>
              </div>
            </div>
          </div>
          <span className='inside-content-text-2'>
            {props.companyRegNumber || companyRegNumber}
          </span>
        </div>
      </div>
    </div>
  )
})

App.displayName = 'App'

export default App
