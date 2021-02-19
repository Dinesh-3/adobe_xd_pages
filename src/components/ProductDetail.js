import ProductView from "./ProductDetailComponents/ProductView"
import Review from "./ProductDetailComponents/Reviews"
import {Link} from "react-router-dom"

const ProductDetail = () => {
    return (
        <div className="w-4/5 mx-auto my-5">
            <div className="flex space-x-2">
                <span className="inline-block"><Link className="hover:underline hover:text-skin_dark inline-block" to="/">Home </Link> / <Link className="hover:underline hover:text-skin_dark inline-block" to="/all-products"> Flowers </Link> / </span>
                <span className="inline-block"><a className="underline text-skin_dark inline-block" href="">Pretty Pink Rose Basket Made from Bengal Bamboo</a></span>
            </div>
            <ProductView />
            {/*
            <!-- Like it --> */}
            <div className="flex border border-gray-500 py-4 justify-center items-center space-x-4 my-5">
                <h1>Like it? Share it!</h1>
                <div className="flex space-x-3">
                    <img src="/assets/images/facebook_1.svg" alt="" srcSet="" />
                    <img src="/assets/images/linkedin_1.svg" alt="" srcSet="" />
                    <img src="/assets/images/pinterest_1.svg" alt="" srcSet="" />
                    <img src="/assets/images/twitter_1.svg" alt="" srcSet="" />
                    <img src="/assets/images/google_plus.svg" alt="" srcSet="" />
                    <img src="/assets/images/mail_box_1.svg" alt="" srcSet="" />
                    <img src="/assets/images/share_link.svg" alt="" srcSet="" />
                </div>
            </div>
            {/*
            <!-- Reviews --> */}
            <div className="flex justify-between items-center my-10">
                <div>

                </div>
                <div className="font-bold text-lg">
                    Reviews (12)
                </div>
                <div className="underline text-skin_dark">
                    Write a Review
                </div>
            </div>
            
            <Review />

        </div>
    )
}

export default ProductDetail