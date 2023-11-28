import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <a href= "https://www.google.com" target="_blank">Click here to access Google</a>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

let reactElement = React.createElement('a', {href: 'https://google.com',target: '_blank' }, "click here to visit Google")

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
