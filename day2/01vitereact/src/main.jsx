import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>CustomReact!!</h1>
        </div>
    )
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google',
    
}
const anotherElement=(
    <a href="https://google.com" target="_blank">Visit google</a>
)
const user='Ragya Ranjan'
const element = React.createElement( 
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google!',
  user
)



ReactDOM.createRoot(document.getElementById('root')).render(
    //element
    //anotherElement
    //reactElement (this will not work because of syntax)
    //myApp
    <App/>
)
