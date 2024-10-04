import { useState } from 'react'

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


export default function App() {
  const info = {
    name: "Mohamed Ibrahim",
    email: "mohamedhassen.ibrahim@mail.utoronto.ca",
    number: 4164515682
  }
  return (
    <div className="resume">
      <Header name={info.name} email={info.email} number={info.number}/>
    </div>
  )
}