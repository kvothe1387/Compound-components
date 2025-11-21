import React, { Children } from "react"

export default function MenuDropdown({ children, open }) {
  return open ? (
    <div className="menu-dropdown">
      {children}
    </div>
  ) : null
}