import React from 'react'
import Image from 'next/image'
import Button from '../elements/Button'

export default function ProductCard({
  id,
  title,
  price,
  description,
  image,
  onAddToCart
}) {
  return (
    <div className="product">
      <div className="wrapper flex flex-column gap-s align-center">
        <Image 
          src={image ? image : '/assets/placeholder.jpg'}
          width={150}
          height={150}
          alt='product'
          style={{
            objectFit: 'contain'
          }}
        />
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {price && <span>{price} SEK</span>}

        <Button label={'Add to cart'} className={'primary'} onClick={onAddToCart} />
      </div>
    </div>
  )
}