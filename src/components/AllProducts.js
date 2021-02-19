import { useLocation } from "react-router-dom";
import {allProductsList} from '../services/productDataList'
import { Link } from 'react-router-dom'
const AllProducts = () => {

    const pathname = useLocation().pathname
    return (
        <div className="w-3/4 mx-auto"> 
            <div className="flex justify-between my-5">
                <button className="px-6 py-2 border border-gray-500 rounded-lg">Filters</button>
                
                <div>
                    <label for="sortBy">Sort By:</label>
                    <select className="px-2 py-2 border border-gray-500 rounded-lg outline-none" name="sortBy" id="sortBy">
                        <option value="featured_items">Featured Items</option>
                        <option value="categories">Categories</option>
                        <option value="size">Size</option>
                        <option value="colors">Colors</option>
                    </select>
                </div>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {
                    allProductsList.map(productData => (
                        <Link to={ "/detail/" + productData.product_id }>
                            <div className="flex flex-col space-y-2" key={productData.product_id}>
                                <img src={productData.img_urls[0]} alt={productData.product_title} />
                                <div className="px-5 py-2 flex flex-col space-y-2 skin-skin_light">
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
        </div>
    )
}

export default AllProducts;