import { Link } from 'react-router-dom'
import {allProductsList} from '../../services/productDataList'
import {useState} from 'react'

const FeaturedProduct = () => { 
    const [slideRange, setSlideRange] = useState({start:3,end:6})
    const [productDataList, setProductDataList] = useState(allProductsList.slice(0,4))
    const changeSlide = (index) => {
        let currentRange = {}
        if(slideRange.start < 0 || slideRange.end > allProductsList.length) {
            currentRange = {start:3,end:6}
        }else {
            if(index == 1){
                console.log(slideRange);
                currentRange = {
                    start: slideRange.start + 1,
                    end: slideRange.end + 1
                }
            }else {
                currentRange = {
                    start: slideRange.start - 1,
                    end: slideRange.end - 1
                }
            }
        }
        console.log("-",currentRange);
        setSlideRange(currentRange)
        let currentData = allProductsList.slice(currentRange.start, currentRange.end+1)
        setProductDataList(currentData)
        
    }
    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-center font-bold text-2xl my-5">Featured Product</h1>
            <div className="flex justify-center items-center relative">
                <div onClick={() => changeSlide(-1)} className="z-10 p-2 h-8 w-8 bg-skin_dark text-2xl rounded-full flex justify-center items-center cursor-pointer text-white absolute top-1/3 -left-4">
                    <i className='bx bxs-chevron-left' ></i>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {
                        productDataList.map(productData => (
                            <Link to={ "/detail/" + productData.product_id }>
                                <div className="flex flex-col space-y-2 " key={productData.product_id}>
                                    <div className="relative">
                                        <img className="w-60 h-60 object-cover" src={productData.slider_image[0].img} alt={productData.product_title} />
                                        {   productData.stock == 0 && 
                                            <div className="w-full h-full bg-white_o_3 absolute top-0 flex justify-center items-center">
                                                <button className="py-4 px-8 bg-footer_gray text-skin_dark">OUT OF STOCK</button>
                                            </div>
                                        }
                                    </div>
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
                <div onClick={() => changeSlide(1)} className="p-2 h-8 w-8 bg-skin_dark text-2xl rounded-full flex justify-center items-center cursor-pointer text-white absolute top-1/3 -right-4">
                    <i className='bx bxs-chevron-right' ></i>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct;