"use client"

import NameInput from "@/componets/name-input"
import Output from "@/componets/output"
import { useState } from "react"

export default function Home() {
  // første element er vores stete (i)
  // andet element er en funktion der har til opgave at opdatere state-variablen
  const [i, setI] = useState(0)

  const [name, setName] = useState("Brian")

  // function update() {
  //   setI(i + 1)
  // }

  return (
    <main>
      <h1>{i}</h1>
      <button /* onClick={update} */ onClick={() => setI(i + 1)}>Klik her</button>
      <div>
        {/* <input type="text" onKeyUp={event => setName(event.target.value)}/> */}
        <NameInput setName={setName} />
        {/* <p>{name}</p> */}
        <Output name={name}/>
      </div>
    </main>
  )
}
