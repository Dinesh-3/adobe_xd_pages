import { Link } from 'react-router-dom'
import {productDataList} from '../../services/productDataList'

const FeaturedProduct = () => { 
    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-center font-bold text-2xl my-5">Featured Product</h1>
            <div className="flex justify-center items-center relative">
                <div className="p-2 h-8 w-8 bg-skin_dark text-2xl rounded-full flex justify-center items-center cursor-pointer text-white absolute top-1/3 -left-4">
                    <i className='bx bxs-chevron-left' ></i>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {
                        productDataList.map(productData => (
                            <Link to={ "/detail/" + productData.product_id }>
                                <div className="flex flex-col space-y-2 " key={productData.product_id}>
                                    <img className="w-60 h-60 object-cover" src={productData.img_urls[0]} alt={productData.product_title} />
                                    <div className="px-5 py-2 flex flex-col space-y-2 bg-skin_light">
                                        <h3>{productData.product_title}</h3>
                                        <div className="flex space-x-2">
                                            <h1 className="font-bold text-lg"> &#8377; {productData.current_price}</h1>
                                            <h1 className="font-normal text-lg text-gray-400 line-through"> &#8377; {productData.actual_price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="p-2 h-8 w-8 bg-skin_dark text-2xl rounded-full flex justify-center items-center cursor-pointer text-white absolute top-1/3 -right-4">
                    <i className='bx bxs-chevron-right' ></i>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct;