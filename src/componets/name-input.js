"use client"

export default function NameInput(props) {
    return (
        <input type="text" onKeyUp={event => props.setName(event.target.value)}/>
    )
}