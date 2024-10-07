import { useState } from 'react'
import Form from './Form'
import "./styles/resumestyles.css"

function Header({name, email, number}) {
  return (
    <header>
      <h1>{name}</h1>
      <div>
        <h3>{email} | {number}</h3>
      </div>
    </header>
  )
}

function Education({ education }) {

}
  
function Experience({ experiences }) {

}

function Skills({ education }) {

}


export default function App() {
  const info = {
    name: "Mohamed Ibrahim",
    email: "mohamedhassen.ibrahim@mail.utoronto.ca",
    number: 4164515682
  }
  return (
    <>
      <Form/>
      <div className="resume">
        <Header name={info.name} email={info.email} number={info.number}/>
      </div>
    </>
  )
}