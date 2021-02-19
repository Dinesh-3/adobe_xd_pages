const ProductView = () => {
    const productData = {
        "img_urls": [
            "./assets/images/rose_bucket.jpeg",
        ],
        "product_title": "Pretty Pink Rose Basket Made from Bengal Bamboo",
        "actual_price": 4000,
        "current_price": 3000,
        "colors": ["red", "orange", "blue"],
        "sizes": ["small", "large"],
        "quantity": [500],
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, perferendis eveniet? Nobis accusantium dolor, quam magnam excepturi quasi amet quae magni, optio odio ad maxime necessitatibus itaque",
        "stock": 0
   }
    let Specifications = ""   
    if(productData.stock == 0){
        Specifications = <h1 className="text-xl text-red-600">OUT OF STOCK</h1>
    }else {
        Specifications = <div class="flex flex-col space-y-4">
                            <div class="grid grid-cols-2">
                                <h2 class="font-bold text-lg">Color</h2>
                                <div class="flex space-x-4">
                                    {
                                        productData.colors.map((data, index) => {
                                            if(index == 0){
                                                return (<button class="px-6 py-2 bg-skin_thin rounded-lg uppercase">{data}</button>)
                                            }else {
                                                return (<button class="px-6 py-2 border border-gray-500 rounded-lg uppercase">{data}</button>)
                                            }
                                        })
                                    }
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <h2 class="font-bold text-lg">Size</h2>
                                <div class="flex space-x-4">
                                    {
                                        productData.sizes.map( (data, index) => {
                                            if( index ==0 ) {
                                                return (<button class="px-6 py-2 bg-skin_thin rounded-lg uppercase">{data}</button>)
                                            }else {
                                                return (<button class="px-6 py-2 border border-gray-500 rounded-lg uppercase">{data}</button>)
                                            }
                                        } )
                                    }
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <h2 class="font-bold text-lg">Quantity</h2>
                                <div class="flex space-x-4 self-start">
                                    <button
                                        class="px-6 py-2 border border-gray-500 rounded-lg flex justify-center items-center space-x-2"><span
                                            class="font-medium text-2xl text-skin_dark">
                                            {"<"} </span>
                                            <h1>{productData.quantity[0]}</h1> <span class="font-medium text-2xl text-skin_dark"> {">"} </span>
                                    </button>
                                </div>
                            </div>
                        </div>
        
    }

    return (
        <div class="grid grid-cols-2 gap-5">
            <div className="relative">
                <img class="p-5" src={productData.img_urls} alt="" srcset="" />
                {productData.stock == 0 && 
                    <div className="w-full h-full bg-white_o_3 absolute top-0 flex justify-center items-center">
                        <button className="py-5 px-12 bg-footer_gray text-skin_dark">OUT OF STOCK</button>
                    </div>
                }
            </div>
            <div class="p-5 flex flex-col space-y-5">
                <h1 class="font-bold text-xl">{productData.product_title}</h1>
                <div class="flex space-x-1 justify-start items-center">
                    <div class="flex space-x-1 text-skin_dark">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                    </div>
                    <h1 class="text-gray-300">|</h1>
                    <a class="underline text-skin_dark" href="">12 Reviews</a>
                </div>
                <div class="flex space-x-2">
                    <h1 class="font-bold text-lg"> &#8377; {productData.current_price}</h1>
                    <h1 class="font-normal text-lg text-gray-400 line-through"> &#8377; {productData.actual_price}</h1>
                </div>
                {Specifications}
                <div>
                    <p class="inline">{productData.description}</p>
                    <span><a class="underline text-skin_dark" href="">Read More</a></span>
                    <span class="text-skin_dark"> {">"}</span>
                </div>
                {productData.stock > 0 
                    &&  <div class="flex space-x-4">
                            <button class="px-6 py-2 border border-gray-500 rounded-lg">ADD TO CART</button>
                            <button class="px-6 py-2 bg-skin_dark rounded-lg">BUY NOW</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductView;