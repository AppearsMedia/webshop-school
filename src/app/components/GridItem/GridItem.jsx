import React from 'react'

export default function GridItem({
    span,
    mobile_span,
    classes,
    children
}) {
  return (
    <div className={`grid-item ${mobile_span && `mobile-span-${mobile_span}`} ${classes && classes} ${span && `span-${span}`}`}>
        {children}
    </div>
  )
}
