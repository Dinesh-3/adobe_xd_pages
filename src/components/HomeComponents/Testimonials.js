const Testimonials = () => {

    const testimonialsData = [
        {
            "user_name": "Alexander Josheph",
            "review": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, impedit quidem dolore excepturi veritatis rem saepe aspernatur veniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!",
            "company_name": "Company name",
            "img_url": "./assets/images/profile.jpeg"
        },
        {
            "user_name": "Alexander Josheph",
            "review": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, impedit quidem dolore excepturi veritatis rem saepe aspernatur veniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!",
            "company_name": "Company name",
            "img_url": "./assets/images/profile.jpeg"
        },
        {
            "user_name": "Alexander Josheph",
            "review": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, impedit quidem dolore excepturi veritatis rem saepe aspernatur veniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!",
            "company_name": "Company name",
            "img_url": "./assets/images/profile.jpeg"
        }
    ]
    return (
            <div class="w-4/5 mx-auto my-10 text-center">
                <h1 class="font-bold text-xl">Our Testimonials</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    testimonialsData.map( data => (
                            <div class="flex flex-col justify-center items-center space-y-4 p-10">
                                <img class="rounded-full" src={data.img_url} alt={data.user_name} srcset="" />
                                <h1 class="font-bold text-lg">{data.user_name}</h1>
                                <h2 class="text-skin_dark">{data.company_name}</h2>
                                <p>{data.review}</p>
                                <a class="underline text-skin_dark" href="">Read More</a>
                            </div>
                    ) )
                }
                </div>
            </div>
        )
}

export default Testimonials;