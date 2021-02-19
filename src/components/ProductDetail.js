import ProductView from "./ProductDetailComponents/ProductView"
import Review from "./ProductDetailComponents/Reviews"

const ProductDetail = () => {
    return (
        <div class="w-4/5 mx-auto">
            <div class="flex space-x-2">
                <span>Home / Flowers / </span>
                <span><a class="underline text-skin_dark" href="">Pretty Pink Rose Basket Made from Bengal Bamboo</a></span>
            </div>
            <ProductView />
            {/*
            <!-- Like it --> */}
            <div class="flex border border-gray-500 py-4 justify-center items-center space-x-4">
                <h1>Like it? Share it!</h1>
                <div class="flex space-x-3">
                    <img src="./assets/images/facebook_1.svg" alt="" srcset="" />
                    <img src="./assets/images/linkedin_1.svg" alt="" srcset="" />
                    <img src="./assets/images/pinterest_1.svg" alt="" srcset="" />
                    <img src="./assets/images/twitter_1.svg" alt="" srcset="" />
                    <img src="./assets/images/google_plus.svg" alt="" srcset="" />
                    <img src="./assets/images/mail_box_1.svg" alt="" srcset="" />
                    <img src="./assets/images/share_link.svg" alt="" srcset="" />
                </div>
            </div>
            {/*
            <!-- Reviews --> */}
            <div class="flex justify-between items-center my-10">
                <div>

                </div>
                <div class="font-bold text-lg">
                    Reviews (12)
                </div>
                <div class="underline text-skin_dark">
                    Write a Review
                </div>
            </div>
            
            <Review />

        </div>
    )
}

export default ProductDetail