import {useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import BeatLoader from 'react-spinners/BeatLoader'
import ProductCard from '../ProductCard'
import './index.css'

const PrimeDealsSection = () => {
    const [primeDealsData,setPrimeData]=useState([])
  useEffect(() => {
    const getPrimeDeals = async () => {
      const apiUrl = 'https://apis.ccbp.in/prime-deals'
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const fetchedData = await response.json()
        const formattedData = fetchedData.prime_deals.map(product => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }))
        setPrimeData(formattedData);
      }
    }
    getPrimeDeals()
  }, [])

const renderLoadingView=()=>{
    <div className='loading-container'>
        <BeatLoader color="#7032a5"/>
    </div>
}
const renderPrimeDealsFailureView=()=>{
    return(
        <img src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png" alt="Exclusive Deals Banner"
        className="register-prime-image" />
    )
}

  const renderPrimeDealsList = () => {
    return (
      <div className="products-list-container">
        <marquee scrollAmount="10">
                <div className="hzr">
                    <h1 className="primedeals-list-heading">
                   <span className='mark'>*************</span>Exclusive Prime Deals ,Get UPTO <mark>50%</mark><span className='mark'>*************</span>
                    </h1>
                  
                </div>
          </marquee>
        <ul className="products-list">
          {primeDealsData.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  return <>{renderPrimeDealsFailureView()}</>
}

export default PrimeDealsSection
