import React from "react"
import Button from "../Button/Button.jsx"
import { MenuContext } from "./Menu.jsx"

export default function MenuButton({ children }) {
  const { toggle, open, menuId } = React.useContext(MenuContext)
  return (
    <Button
      onClick={toggle}
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls={menuId}
    >
      {children}
    </Button>
  )
}