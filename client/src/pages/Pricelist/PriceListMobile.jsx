// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import PriceListWeekDay from "./PriceListWeekDay";
import PriceListWeekEnd from "./PriceListWeekEnd";

export default function PriceListMobile() {
	return (
		<div>
			<Swiper
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				navigation={true}
				pagination={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide className="py-small">
					<PriceListWeekDay />
				</SwiperSlide>

				<SwiperSlide className="py-small">
					<PriceListWeekEnd />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
