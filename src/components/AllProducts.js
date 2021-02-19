import { useLocation } from "react-router-dom";
import {allProductsList} from '../services/productDataList'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AllProducts = () => {

    const [productList, setProductList] = useState(allProductsList)
    const [inputValue, setInputValue] = useState("")
    const handleFilter = (e) => {
        const input = e.target.value.toLowerCase()
        const filterData = []
        allProductsList.forEach(function(item){
            if(item.product_title.toLowerCase().indexOf(input) != -1){
              filterData.push(item)
            }
          })
        setInputValue(input)  
        setProductList(filterData)  
    }
    const pathname = useLocation().pathname
    return (
        <div className="w-3/4 mx-auto"> 
            <div className="flex justify-between my-5">
                <button className="px-6 py-2 border border-gray-500 rounded-lg">Filters</button>
                <input
                onKeyUp={(e) => handleFilter(e)}
                type="text"
                name="product_search"
                id="product_search"
                placeholder="Search Products"
                class="outline-none h-9 px-5 bg-skin_thin rounded-lg"
              />
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
            <div className="text-center my-5">
                <h1>Search Results for "<span className="text-skin_dark font-bold">{`${inputValue}`}</span>"</h1>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {
                    productList.map(productData => (
                        <Link to={ "/detail/" + productData.product_id }>
                            <div className="flex flex-col space-y-2" key={productData.product_id}>
                                <div className="relative">
                                    <img className="w-60 h-60 object-cover" src={productData.slider_image[0].img} alt={productData.product_title} />
                                    {   productData.stock == 0 && 
                                        <div className="w-full h-full bg-white_o_3 absolute top-0 flex justify-center items-center">
                                            <button className="py-4 px-8 bg-footer_gray text-skin_dark">OUT OF STOCK</button>
                                        </div>
                                    }
                                </div>
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