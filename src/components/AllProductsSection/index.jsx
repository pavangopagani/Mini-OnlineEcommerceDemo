import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

import ProductsHeader from '../ProductsHeader'
import ProductCard from '../ProductCard'

import './index.css'

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const AllProductsSection = () => {
  const [productsList, setProductsList] = useState([])

  const [activeOptionId, setActiveOptionId] = useState(
    sortbyOptions[0].optionId,
  )

  useEffect(() => {
    const getProducts = async () => {
      const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`

      const jwtToken = Cookies.get('jwt_token')

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(apiUrl, options)

      if (response.ok === true) {
        const fetchedData = await response.json()

        const formattedData = fetchedData.products.map(product => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }))

        setProductsList(formattedData)
      }
    }

    getProducts()
  }, [activeOptionId])

  const updateActiveOptionId = optionId => {
    setActiveOptionId(optionId)
  }

  const renderProductsList = () => {
    return (
      <div className="bgm">
        <ProductsHeader
          sortbyOptions={sortbyOptions}
          activeOptionId={activeOptionId}
          updateActiveOptionId={updateActiveOptionId}
        />

        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard
              productData={product}
              key={product.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  return <>{renderProductsList()}</>
}

export default AllProductsSection