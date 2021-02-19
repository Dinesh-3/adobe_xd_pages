const Notification = () => {
    return (
        <div className="w-80 flex justify-between items-center border border-skin_dark bg-white">
            <img className="w-16" src="/assets/images/rose_bucket.jpeg" alt="flower"/>
            <div className="flex flex-col space-y-2 px-2 py-2 relative">
                <a className="text-skin_dark text-sm"><p className="cursor-pointer inline-block">Add to Cart</p></a>
                <p className="text-xs">Pretty Pink Rose Basket Made from Bengal Bamboo</p>
                <div className="flex w-5 h-5 text-lg rounded-full  border text-skin_dark bg-white border-skin_dark justify-center items-center absolute -top-4 right-5 cursor-pointer">
                    <i className='bx bx-x'></i>
                </div>
            </div>
        </div>
    )
}

export default Notification;