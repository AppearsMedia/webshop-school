import React from 'react'

export default function Grid({
    columns,
    mobile_columns,
    gap,
    children
}) {
  return (
    <div className={`grid columns-${columns} ${mobile_columns && 'mobile-columns-' + mobile_columns} gap-${gap}`}>
        {children}
    </div>
  )
}
