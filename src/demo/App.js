import React, { useRef } from 'react';
import SealGenegrator from '../lib';

const App = () => {
  const sealRef = useRef(null)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <SealGenegrator ref={sealRef} />
        <SealGenegrator
          companyName='xyz imports'
          companyRegNumber='49039230495'
          color='green'
          fontFamily='cursive'
          innerTextStyle={{ fontSize: '12px' }}
          size={250}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '50px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5px'
          }}
        >
          <label htmlFor='colorPicker' style={{ paddingBottom: '5px' }}>
            Color Picker
          </label>
          <input
            type='color'
            name='colorPicker'
            style={{ padding: '5px', width: '300px' }}
            defaultValue='#dc143c'
            onChange={e => {
              sealRef.current.setColor(e.target.value)
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5px'
          }}
        >
          <label htmlFor='fontFamily' style={{ paddingBottom: '5px' }}>
            Font Family
          </label>
          <select
            type='text'
            name='fontFamily'
            style={{ padding: '8px', width: '310px' }}
            onChange={e => {
              sealRef.current.setFontFamily(e.target.value)
            }}
          >
            <option value='"Times New Roman"'>Times New Roman</option>
            <option value='cursive'>Cursive</option>
            <option value='"Segoe UI'>Segoe UI</option>
            <option value='Roboto'>Roboto</option>
            <option value='Ubuntu'>Ubuntu</option>
            <option value='Courier New'>Courier New</option>
            <option value='monospace'>Monospace</option>
            <option value='Menlo'>Menlo</option>
            <option value='"Helvetica Neue"'>Helvetica Neue</option>
            <option value='"sans-serif"'>Sans Serif</option>
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5px'
          }}
        >
          <label htmlFor='name' style={{ paddingBottom: '5px' }}>
            Company Name
          </label>
          <input
            type='text'
            name='name'
            style={{ padding: '5px', width: '300px' }}
            maxLength={40}
            onChange={e => {
              sealRef.current.setCompanyName(e.target.value)
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5px'
          }}
        >
          <label htmlFor='regNumber' style={{ paddingBottom: '5px' }}>
            Company Reg Number
          </label>
          <input
            type='text'
            name='regNumber'
            maxLength={10}
            style={{ padding: '5px', width: '300px' }}
            onChange={e => {
              sealRef.current.setCompanyRegNumber(e.target.value)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default App

