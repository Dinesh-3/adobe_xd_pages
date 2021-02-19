import { useLocation } from "react-router-dom"
import { allProductsList } from '../../services/productDataList'
import {useState} from 'react'
import {Link} from 'react-router-dom'
const ProductView = () => {
    
    const pathname = useLocation().pathname.split("/")[2]
    const productData = getProductData()
    function getProductData() {
        let ans =  allProductsList.filter((data, index) => data.product_id == pathname)
        return ans[0]
    }
    let Specifications = ""   

    const [imageUrl, setImageUrl] = useState(productData.slider_image[0])
    const changeImage = (src, id) => {
        setImageUrl({img:src,id:id})
    }

    const slideChange = (index) => {
        const currentIndex = imageUrl.id + index
        if( currentIndex < 0 ) {
            setImageUrl(productData.slider_image[productData.slider_image.length - 1])
        }else if (currentIndex > productData.slider_image.length-1) {
            setImageUrl(productData.slider_image[0])
        }else {
            const currentImage = productData.slider_image[currentIndex]
            setImageUrl(currentImage)
        }
    }
    if(productData.stock == 0){
        Specifications = <h1 className="text-xl text-red-600">OUT OF STOCK</h1>
    }else {
        Specifications = <div className="flex flex-col space-y-4">
                            <div className="grid grid-cols-2">
                                <h2 className="font-bold text-lg">Color</h2>
                                <div className="flex space-x-4">
                                    {
                                        productData.colors.map((data, index) => {
                                            if(index == 0){
                                                return (<button className="px-6 py-2 bg-skin_thin rounded-lg uppercase" key={index}>{data}</button>)
                                            }else {
                                                return (<button className="px-6 py-2 border border-gray-500 rounded-lg uppercase" key={index}>{data}</button>)
                                            }
                                        })
                                    }
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <h2 className="font-bold text-lg">Size</h2>
                                <div className="flex space-x-4">
                                    {
                                        productData.sizes.map( (data, index) => {
                                            if( index ==0 ) {
                                                return (<button className="px-6 py-2 bg-skin_thin rounded-lg uppercase" key={index}>{data}</button>)
                                            }else {
                                                return (<button className="px-6 py-2 border border-gray-500 rounded-lg uppercase" key={index}>{data}</button>)
                                            }
                                        } )
                                    }
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <h2 className="font-bold text-lg">Quantity</h2>
                                <div className="flex space-x-4 self-start">
                                    <button
                                        className="px-6 py-2 border border-gray-500 rounded-lg flex justify-center items-center space-x-2"><span
                                            className="font-medium text-2xl text-skin_dark">
                                            {"<"} </span>
                                            <h1>{productData.quantity[0]}</h1> <span className="font-medium text-2xl text-skin_dark"> {">"} </span>
                                    </button>
                                </div>
                            </div>
                        </div>
        
    }

    return (
        <div>
            <div className="flex space-x-2">
                <span className="inline-block"><Link className="hover:underline hover:text-skin_dark inline-block" to="/">Home </Link> / <Link className="hover:underline hover:text-skin_dark inline-block" to="/all-products"> Flowers </Link> / </span>
                <span className="inline-block"><Link className="underline text-skin_dark inline-block" to={useLocation().pathname}>{productData.product_title}</Link></span>
            </div>
            <div className="flex flex-col md:flex-row jusitfy-between items-start py-5">
                <div className="relative h-96 w-2/4 self-center">
                    <img  className="object-cover h-full w-full " src={imageUrl.img} alt={productData.product_title} />
                    {productData.stock == 0 && 
                        <div className="w-full h-full bg-white_o_3 absolute top-0 flex justify-center items-center">
                            <button className="py-5 px-12 bg-footer_gray text-skin_dark">OUT OF STOCK</button>
                        </div>
                    }
                </div>
                <div className="p-5 flex flex-col space-y-5 w-3/4">
                    <h1 className="font-bold text-xl">{productData.product_title}</h1>
                    <div className="flex space-x-1 justify-start items-center">
                        <div className="flex space-x-1 text-skin_dark">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        <h1 className="text-gray-300">|</h1>
                        <a className="underline text-skin_dark" href="">12 Reviews</a>
                    </div>
                    <div className="flex space-x-2">
                        <h1 className="font-bold text-lg"> &#8377; {productData.current_price}</h1>
                        <h1 className="font-normal text-lg text-gray-400 line-through"> &#8377; {productData.actual_price}</h1>
                    </div>
                    {Specifications}
                    <div>
                        <p className="inline">{productData.description}</p>
                        <span><a className="underline text-skin_dark" href="">Read More</a></span>
                        <span className="text-skin_dark"> {">"}</span>
                    </div>
                    {productData.stock > 0 
                        &&  <div className="flex space-x-4">
                                <button className="px-6 py-2 border border-gray-500 rounded-lg">ADD TO CART</button>
                                <button className="px-6 py-2 bg-skin_dark rounded-lg">BUY NOW</button>
                            </div>
                    }
                </div>
            </div>
            <div className="w-1/3">
                <div className="relative">
                    <div className="z-10 p-2 h-8 w-8 bg-skin_dark text-2xl rounded-full flex justify-center items-center cursor-pointer text-white absolute top-1/3 -left-4" onClick={()=>slideChange(-1)}>
                            <i className='bx bxs-chevron-left' ></i>
                    </div>
                    <div className="flex space-x-2 inline-block ">
                        {productData.slider_image.map((data) => {
                            return <img
                            key={data.id}
                            className={`w-16 h-16 object-cover cursor-pointer ${imageUrl.id === data.id ? "opacity-1" : "opacity-40"}`} src={data.img}
                            alt=""
                            onClick={()=>changeImage(data.img, data.id)} />
                        })}
                    </div>
                    <div className="z-10 p-2 h-8 w-8 bg-skin_dark text-2xl rounded-full flex justify-center items-center cursor-pointer text-white absolute top-1/3 -right-4" onClick={()=>slideChange(1)}>
                            <i className='bx bxs-chevron-right' ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView;