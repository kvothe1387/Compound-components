import React from "react"
import Button from "../Button/Button.jsx"

export default function MenuButton({ buttonText, onClick }) {
  return (
    <Button onClick={onClick}>{buttonText}</Button>
  )
}