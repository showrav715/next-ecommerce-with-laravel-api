import { ProductContext } from '@/lib/context/ProductContext'
import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import Container from './styled/Container'

export default function PopularProduct() {
    const {popular_products} = useContext(ProductContext)
  return (
    <Container class1="popular-wrapper py-5 home-wrapper-2">
    <div className="row">
      <div className="col-12">
        <h3 className="section-heading">Our Popular Products</h3>
      </div>
    </div>
    <div className="row">
              {popular_products.map((item, index) => { 
                  return (
                    <ProductCard {...item} grid={3} />
                  )
              })}
    </div>
  </Container>
  )
}
