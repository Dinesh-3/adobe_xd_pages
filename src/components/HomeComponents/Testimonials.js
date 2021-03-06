const Testimonials = () => {

    const testimonialsData = [
        {
            "user_name": "Alexander Josheph",
            "review": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, impedit quidem dolore excepturi veritatis rem saepe aspernatur veniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!",
            "company_name": "Company name",
            "img_url": "/assets/images/profile.jpeg"
        },
        {
            "user_name": "Andrew Josheph",
            "review": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, impedit quidem dolore excepturi veritatis rem saepe aspernatur veniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!",
            "company_name": "Company name",
            "img_url": "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "user_name": "Isabella Charlotte",
            "review": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, impedit quidem dolore excepturi veritatis rem saepe aspernatur veniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!",
            "company_name": "Company name",
            "img_url": "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
    ]
    return (
            <div className="w-4/5 mx-auto my-10 text-center">
                <h1 className="font-bold text-xl">Our Testimonials</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    testimonialsData.map( data => (
                            <div className="flex flex-col justify-center items-center space-y-4 p-10">
                                <img className="rounded-full w-40 h-40" src={data.img_url} alt={data.user_name} srcSet="" />
                                <h1 className="font-bold text-lg">{data.user_name}</h1>
                                <h2 className="text-skin_dark">{data.company_name}</h2>
                                <p>{data.review}</p>
                                <a className="underline text-skin_dark" href="">Read More</a>
                            </div>
                    ) )
                }
                </div>
            </div>
        )
}

export default Testimonials;