import React from "react";

import "../../index.css";
class ProductViews extends React.Component {
    state={
        img: "/assets/images/rose_bucket.jpeg",
        id:1
    }
    changeImage=(src,id)=>{
        this.setState({img:src,id:id})
    }
    render() {
        const productData = {
            "img_urls": [
                "../../assets/rose_bucket.jpeg",
            ],
            "product_title": "Pretty Pink Rose Basket Made from Bengal Bamboo",
            "actual_price": 4000,
            "current_price": 3000,
            "colors": ["red", "orange", "blue"],
            "sizes": ["small", "large"],
            "quantity": [500],
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, perferendis eveniet? Nobis accusantium dolor, quam magnam excepturi quasi amet quae magni, optio odio ad maxime necessitatibus itaque",
            "stock": 1,
            slider_image: [
                {
                    id: 1,
                    img: "https://images.pexels.com/photos/4428629/pexels-photo-4428629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    id: 2,
                    img: "https://images.pexels.com/photos/4478396/pexels-photo-4478396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, {
                    id: 3,
                    img: "https://images.pexels.com/photos/4555279/pexels-photo-4555279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    id: 4,
                    img: "https://images.pexels.com/photos/4428629/pexels-photo-4428629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    id: 5,
                    img: "https://images.pexels.com/photos/4478396/pexels-photo-4478396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
            ]
        }
        let Specifications = ""
        if (productData.stock == 0) {
            Specifications = <h1 className="text-xl text-red-600">OUT OF STOCK</h1>
        } else {
            Specifications = (
                <div className="flex flex-col space-y-4">
                    <div className="grid grid-cols-2">
                        <h2 className="font-bold text-lg">Color</h2>
                        <div className="flex space-x-4">
                            {
                                productData.colors.map((data, index) => {
                                    if (index == 0) {
                                        return (<button className="px-6 py-2 bg-skin_thin rounded-lg uppercase">{data}</button>)
                                    } else {
                                        return (<button className="px-6 py-2 border border-gray-500 rounded-lg uppercase">{data}</button>)
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <h2 className="font-bold text-lg">Size</h2>
                        <div className="flex space-x-4">
                            {
                                productData.sizes.map((data, index) => {
                                    if (index == 0) {
                                        return (<button className="px-6 py-2 bg-skin_thin rounded-lg uppercase">{data}</button>)
                                    } else {
                                        return (<button className="px-6 py-2 border border-gray-500 rounded-lg uppercase">{data}</button>)
                                    }
                                })
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
            )
        }
        return (
            <div className="grid grid-cols-2 gap-5">
                <div className="relative">
                    <img className="p-5" src={this.state.img} alt="" srcSet="" />
                    <span className="bg-skin_dark p-3 rounded-full  text-white  relative top-20 left-10">{"<"}</span>
                    <span className="bg-skin_dark p-3 rounded-full  text-white  relative top-20 left-3/4 ml-14">{">"}</span>
                    <div className="grid grid-cols-5 px-4 ">
                        {productData.slider_image.map((data) => {
                            return <img
                            key={data.id}
                            className={`p-5 ${this.state.id === data.id ? "opacity-1" : "opacity-40"}`} src={data.img}
                            alt=""
                            onClick={()=>this.changeImage(data.img,data.id)} />
                        })}
                    </div>
                    {productData.stock == 0 &&
                        <div className="w-full h-full bg-white_o_3 absolute top-0 flex justify-center items-center">
                            <button className="py-5 px-12 bg-footer_gray text-skin_dark">OUT OF STOCK</button>
                        </div>
                    }
                </div>
                <div className="p-5 flex flex-col space-y-5">
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
                        && <div className="flex space-x-4">
                            <button className="px-6 py-2 border border-gray-500 rounded-lg">ADD TO CART</button>
                            <button className="px-6 py-2 bg-skin_dark rounded-lg">BUY NOW</button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default ProductViews;