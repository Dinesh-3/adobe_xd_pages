
const Review = () => {
    const reviewsList = [
        {
            "user_name": "Alexander Joseph",
            "date": "23 Dec 2020",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita numquam enim quasi eveniet praesentium, neque minus facilis beatae optio. Ipsum itaque rem vel tempora placeat minus vitae Aliquam tempora rem nostrum dolorum, nisi harum molestiae laborum velit sequi vero minus laudantium! Cumque ad itaque, inventore, nisi, repellendus eius tempora aliquid nam atque architecto voluptatum aperiam accusantium error. Consequatur dignissimos harum maiores asperiores odit nihil, eius facere, minima, incidunt sed nemo maxime similique nisi! Deserunt, enim distinctio dolor velit laborum et explicabo voluptas inventore labore tempora suscipit exercitationem."
        },
        {
            "user_name": "Alexander Joseph",
            "date": "23 Dec 2020",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita numquam enim quasi eveniet praesentium, neque minus facilis beatae optio. Ipsum itaque rem vel tempora placeat minus vitae Aliquam tempora rem nostrum dolorum, nisi harum molestiae laborum velit sequi vero minus laudantium! Cumque ad itaque, inventore, nisi, repellendus eius tempora aliquid nam atque architecto voluptatum aperiam accusantium error. Consequatur dignissimos harum maiores asperiores odit nihil, eius facere, minima, incidunt sed nemo maxime similique nisi! Deserunt, enim distinctio dolor velit laborum et explicabo voluptas inventore labore tempora suscipit exercitationem."
        },
        {
            "user_name": "Alexander Joseph",
            "date": "23 Dec 2020",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita numquam enim quasi eveniet praesentium, neque minus facilis beatae optio. Ipsum itaque rem vel tempora placeat minus vitae Aliquam tempora rem nostrum dolorum, nisi harum molestiae laborum velit sequi vero minus laudantium! Cumque ad itaque, inventore, nisi, repellendus eius tempora aliquid nam atque architecto voluptatum aperiam accusantium error. Consequatur dignissimos harum maiores asperiores odit nihil, eius facere, minima, incidunt sed nemo maxime similique nisi! Deserunt, enim distinctio dolor velit laborum et explicabo voluptas inventore labore tempora suscipit exercitationem."
        }
    ]
    return (
            <div>
                {reviewsList.map( (data, index) => (
                    <div class="m-10 p-10 border border-gray-500">
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-2 items-center">
                                <h1 class="inline font-medium text-lg">{data.user_name}</h1>
                                <div class="flex  text-skin_dark">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                            </div>
                            <p class="text-skin_dark">{data.date}</p>
                        </div>
                        <p class="mt-5">{data.description}</p>
                    </div>
                ) )}
            </div>
    )
}

export default Review;