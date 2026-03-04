import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//const element = <h1>React is {5+5} times better with JSX</h1>
/* const firstNumber = 5.5
const secondNumber = 50
const element = <h1>React is {firstNumber + secondNumber} times better with JSX</h1> */
const isEnabled = true
const placeholder = "other value"
const size = 50

const numero = 15
let texto = "Hola"
if (numero > 10) {
  texto = "Adios"
}

const element = (
  <>
    <p className='class-p'>{texto} parrafo</p>
    <p className='class-p'>{numero > 10 ? "Adios" : "Hola"} parrafo</p>
  </>

)

createRoot(document.getElementById('root')).render(
  //  <StrictMode>
  //  <App />
  //</StrictMode>,

  //<h1>Hello vite + React</h1>, // Con JSX

  //React.createElement('h1', null, 'Hello vite + React') // Sin el JSX
  element,

  <input placeholder={placeholder} size={size} disabled={!isEnabled} />
)
