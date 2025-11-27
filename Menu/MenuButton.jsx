import React from "react"
import Button from "../Button/Button.jsx"
import { MenuContext } from "./Menu.jsx"

export default function MenuButton({ children }) {
  const { toggle } = React.useContext(MenuContext)
  return (
    <Button onClick={toggle}>{children}</Button>
  )
}