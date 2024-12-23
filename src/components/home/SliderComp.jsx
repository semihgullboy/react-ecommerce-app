import Slider from "react-slick";
function SliderComp() {

    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="!flex items-center bg-gray-100 px-6">
                    <div>
                        <div className="text-5xl font-bold">Nike Initiator</div>
                        <div className="text-lg my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum voluptas repellat reiciendis recusandae vero minima enim odio. Laudantium, corporis.</div>
                        <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16e9d847-74b2-40d1-b7d9-18691ef4f832/NIKE+INITIATOR.png" alt="" width={400} />
                </div>
                <div className="!flex items-center bg-gray-100 px-6">
                    <div>
                        <div className="text-5xl font-bold">Nike Initiator</div>
                        <div className="text-lg my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum voluptas repellat reiciendis recusandae vero minima enim odio. Laudantium, corporis.</div>
                        <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d2a10cbd-d0d9-473a-b1e5-ba2d78089cd8/NIKE+INITIATOR.png" alt="" width={400} />
                </div>
            </Slider>
        </div>
    )
}

export default SliderComp