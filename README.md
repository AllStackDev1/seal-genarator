# Seal Generator

A powerful React component library for generating custom company seals and stamps with full customization support.

## Overview

**Seal Generator** is a lightweight, easy-to-use React component that creates professional, circular company seals with customizable text, colors, and styling. Perfect for documents, certificates, business cards, and official letterheads. The component uses SVG rendering for crisp, scalable graphics that work beautifully at any size.

### Features

- 🎨 **Fully Customizable** - Control colors, fonts, text, and styling
- 📐 **Scalable SVG** - Renders perfectly at any size
- ⚙️ **Dynamic Updates** - Update seal properties in real-time via refs
- 🎯 **Company Details** - Display company name and registration number
- 🪶 **Lightweight** - Minimal dependencies, optimized for performance
- 📱 **React Native** - Works with React and React-based projects

## Installation

Install via npm from GitHub Packages:

```bash
npm install @allstackdev1/seal-genarator
```

## Usage

### Basic Example

```jsx
import React from 'react'
import SealGenerator from 'seal-genarator'
import 'seal-genarator/build/index.css'

const CreateSeal = () => {
  return (
    <SealGenerator
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

### Sample Output

![Sample Seal](https://github.com/AllStackDev1/seal-genarator/blob/master/public/sample.png?raw=true "Sample Seal")

## Props

| Prop | Type | Description | Required |
| --- | --- | --- | --- |
| `companyName` | `string` | The company or organization name to display | ✓ |
| `companyRegNumber` | `string` | Company registration or license number | ✓ |
| `color` | `string` | Seal color (CSS color name, hex, or rgb) | ✓ |
| `fontFamily` | `string` | Font family for the text (e.g., 'cursive', 'Arial') | ✓ |
| `size` | `number` | Diameter of the seal in pixels | ✓ |
| `innerTextStyle` | `object` | Custom CSS styles for the inner text | ✗ |

## Ref Methods

Use React refs to programmatically update seal properties:

```jsx
const sealRef = useRef()

const handleUpdateColor = () => {
  sealRef.current?.setColor('blue')
}

return (
  <>
    <SealGenerator ref={sealRef} {...props} />
    <button onClick={handleUpdateColor}>Change Color</button>
  </>
)
```

| Method | Description |
| --- | --- |
| `setCompanyName(name)` | Update the company name |
| `setCompanyRegNumber(number)` | Update the registration number |
| `setColor(color)` | Update the seal color |
| `setFontFamily(family)` | Update the font family |

## Development

### Available Commands

| Command | Description |
| --- | --- |
| `npm run start` | Start development server with hot reload |
| `npm run build` | Build for production release |
| `npm run demo` | Build demo for deployment |
| `npm test` | Run unit tests and screenshot tests |
| `npm run pub` | Publish new version to npm |

### Tech Stack

- **React** - UI library
- **Webpack** - Module bundler
- **Babel** - JavaScript transpiler
- **Jest** - Testing framework
- **CircleType** - Text circular path rendering

## License

MIT

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Support

For issues, questions, or suggestions, please open an issue on [GitHub](https://github.com/AllStackDev1/seal-genarator).
