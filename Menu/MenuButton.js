import React from "react"
import Button from "../src/Button/Button"

export default function MenuButton({ buttonText, onClick }) {
  return (
    <Button onClick={onClick}>{buttonText}</Button>
  )
}