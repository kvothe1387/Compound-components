import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {
  const value = React.useContext(MenuContext)
  return value ? (
    <div className="menu-dropdown">
      {children}
    </div>
  ) : null
}