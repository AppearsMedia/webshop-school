"use client"

import React from 'react'
import Link from 'next/link'


export default function Button({
    onClick,
    target,
    href,
    label,
    className,
    type,
    ...rest
}) {

    if (href) {
        return (
            <Link className={className} href={href} target={target}>
                {label && label}
            </Link>
        )
    } else {
        return (
            <button {...rest} type={type && type} className={className} onClick={onClick}>{label && label}</button>
        )
    }
}
