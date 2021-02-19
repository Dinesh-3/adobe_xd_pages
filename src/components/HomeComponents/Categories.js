const Categories = () => {

    const categoriesData = [
        {
            "img_url": "https://images.pexels.com/photos/2697748/pexels-photo-2697748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "title": "Jewelry"
        },
        {
            "img_url": "https://images.pexels.com/photos/1120464/pexels-photo-1120464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "title": "Cakes"
        },
        {
            "img_url": "https://images.pexels.com/photos/264917/pexels-photo-264917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "title": "Teddy"
        },
        {
            "img_url": "https://images.pexels.com/photos/4051555/pexels-photo-4051555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "title": "Chocolates"
        }
    ]
    return (
        <div class="flex flex-col text-center">
            <h1 class="font-bold text-xl">Categories</h1>
            <div class="m-auto w-4/5 grid grid-cols-2 gap-5">
                {
                    categoriesData.map((data) => (<div class="relative">
                    <div class="w-full">
                        <img src={data.img_url} alt={data.title} srcset="" />
                    </div>
                    <div class="bg-gray_o_5 blur w-full py-2 text-center text-white text-lg bottom-0 absolute">
                        {data.title}
                    </div>
                </div>))
                }
            </div>
        </div>
    )
}

export default Categories