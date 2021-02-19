const FeaturedProduct = () => {
    const productDataList = [
        {
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
        },
        {
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
            "stock": 2
        },
        {
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
            "stock": 4
        },
        {
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
            "stock": 1
        }
    ]
    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-center font-bold text-2xl my-5">Featured Product</h1>
            <div className="flex justify-center items-center relative">
                <div className="p-2 h-8 w-8 bg-skin_dark text-2xl rounded-full flex justify-center items-center cursor-pointer text-white absolute top-1/3 -left-4">
                    <i class='bx bxs-chevron-left' ></i>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {
                        productDataList.map(productData => (
                            <div className="flex flex-col space-y-2 bg-skin_light">
                                <img src={productData.img_urls[0]} alt={productData.product_title} />
                                <div className="px-5 py-2 flex flex-col space-y-2">
                                    <h3>{productData.product_title}</h3>
                                    <div class="flex space-x-2">
                                        <h1 class="font-bold text-lg"> &#8377; {productData.current_price}</h1>
                                        <h1 class="font-normal text-lg text-gray-400 line-through"> &#8377; {productData.actual_price}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="p-2 h-8 w-8 bg-skin_dark text-2xl rounded-full flex justify-center items-center cursor-pointer text-white absolute top-1/3 -right-4">
                    <i class='bx bxs-chevron-right' ></i>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct;