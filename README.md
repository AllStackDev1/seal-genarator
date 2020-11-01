# SEAL GENERATOR

## Example
- detail example in src/example.js


```js
import { useRef } from 'react'
import SealGen from './App.js'

const CreateSeal = () => {
  const sealRef = useRef(null)
    return (
        <>
            <SealGen ref={sealRef} />
            <SealGen
              companyName='xyz imports'
              companyRegNumber='49039230495'
              color='red'
              fontFamily='cursive'
              innerTextStyle={{ fontSize: '12px' }}
              size={250}
            />
        </>
    )
}

export default CreateSeal
```

## Props

| Name  | Type |
| ------------- | ------------- |
| companyName  | `string`  |
| companyRegNumber  | `string`  |
| color  | `string`  |
| fontFamily  | `string`  |
| innerTextStyle  | `styles object`  |
| size  | `number`  |

## Ref

| Function  | Description |
| ------------- | ------------- |
| setCompanyName  | To set the company name  |
| setCompanyRegNumber  | To set the company registration number  |
| setColor  | To set the seal color  |
| setFontFamily  | To set the seal font family  |

## Development Commands

| Command  | Description |
| ------------- | ------------- |
| npm run start  | Start dev server  |
| npm run build  | Build for release  |
| npm test	| Run unit and screenshot tests |