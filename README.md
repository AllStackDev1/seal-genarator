# SEAL GENERATOR

## Example

- detail example in src/example.js

```js
import React from 'react'
import SealGenegrator from 'seal-genegrator'

const CreateSeal = () => {
  return (
    <SealGenegrator
      companyName='xyz imports'
      companyRegNumber='49039230495'
      color='green'
      fontFamily='cursive'
      innerTextStyle={{ fontSize: '12px' }}
      size={250}
    />
  )
}

export default CreateSeal
```

![Alt text](public/sample.png?raw=true "Sample")

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
| npm run demo  | Build for deploy  |
| npm test | Run unit and screenshot tests |
