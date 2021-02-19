import Categories from "./HomeComponents/Categories"
import Testimonials from "./HomeComponents/Testimonials"
import FeaturedProduct from './HomeComponents/FeaturedProduct'
const Home = () => {
    return (
        <div>
            <div class="grid relative grid-cols-2">
                <div class="px-5 py-10 sm:px-10 sm:py-20 bg-skin_light gap-3 flex flex-col justify-center items-start">
                    <h1 class="font-bold text-xl">Gift and more..</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga amet harum minima placeat aliquam
                        repudiandae accusantium corporis culpa? Quia adipisci cum esse facere, explicabo reprehenderit officiis
                        iure illum similique ipsam?</p>
                    <a class="bg-skin_dark py-2 px-6 text-white rounded-lg" href="">SHOP NOW</a>
                </div>
                <div class="">
                    <img class="w-full h-auto" src="./assets/images/pexels-cup-of-couple.jpg" alt="" srcset="" />
                </div>
                <div class="absolute bottom-0 left-1/3 text-white py-5 px-10 bg-footer_gray flex justify-center items-center space-x-4">
                    <span>01</span>
                    <div class="w-40 h-1 bg-skin_dark"></div>
                    <i class='bx bxs-chevron-left text-2xl text-skin_dark' ></i>
                    <i class='bx bxs-chevron-right text-2xl text-skin_dark'></i>
                </div>
            </div>
            {/* <!-- Categories --> */}
            <Categories />
            <div class="w-4/5 mx-auto my-10">
                <div class="p-10 bg-white_dark">
                    <h1 class="text-center font-bold text-2xl py-2">Our Features</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium alias facere delectus vero
                        impedit dignissimos, quam aperiam optio suscipit voluptas accusantium minus explicabo sed magnam
                        doloremque dolorem quae? Et.
                        Expedita pariatur et sit molestiae nesciunt doloribus illum, possimus ipsum, commodi excepturi
                        perspiciatis repellendus voluptatem minus ex rem labore aspernatur officiis. Quasi omnis, nihil iste
                        incidunt libero numquam officiis illo?
                        Quae enim corporis recusandae? Tempore itaque fuga, veniam at ullam doloremque? Aliquid, ratione optio
                        dolorum possimus numquam soluta vel est amet distinctio? Molestias voluptas possimus placeat. Nemo
                        pariatur id ipsa.
                        Suscipit harum dolores voluptatibus blanditiis est expedita quasi veritatis quaerat recusandae commodi,
                        quisquam obcaecati ut quae quam laudantium ipsa inventore corrupti. At quam quas magni quaerat commodi
                        quia ea consequatur.
                        Quos rem et voluptatibus, quasi, quis fugit veniam libero, consequuntur amet molestias dolorem
                        cupiditate dolore numquam enim accusamus officia repellendus ipsa ut aut. Sint, earum minima. Provident
                        recusandae debitis molestiae?0</p>
                </div>
            </div>
            {/* Featured Product */}
            <FeaturedProduct />
            {/* <!-- Our Testimonials --> */}
            <Testimonials />
        </div>
    )
}

export default Home