import React from "react"
import Button from "../Button/Button.jsx"

export default function MenuButton({ children, onClick }) {
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}