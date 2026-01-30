import Check from "../../assets/images/bag-check-svgrepo-com.svg";
import Instagram from "../../assets/images/instagram-svgrepo-com.svg";
import PayPing from "../../assets/images/pay-ping.jpg";
import Search from "../../assets/images/search-zoom-in-svgrepo-com (1).svg";
import Telegram from "../../assets/images/telegram-alt-svgrepo-com (1).svg";
import Tick from "../../assets/images/tick-svgrepo-com.svg";
import ZarinPal from "../../assets/images/zarin-pal.jpg";
import ZiPal from "../../assets/images/zibal.jpg";

function FooterComponent() {
	return (
		<footer className="bg-[#e8d9d4] py-8 px-6 md:px-12">
			<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
				<div className="flex flex-row flex-wrap gap-5 md:gap-7 items-center text-sm md:text-base mr-10 ">
					<div className="footer-link font-semibold hover:text-[#2b818b] cursor-pointer transition-colors">
						پاسخ به پرسش‌های متداول
					</div>
					<div className="footer-link font-semibold hover:text-[#2b818b] cursor-pointer transition-colors">
						قوانین و مقررات
					</div>
					<div className="footer-link font-semibold hover:text-[#2b818b] cursor-pointer transition-colors">
						پیگیری سفارش
					</div>
					<div className="footer-link font-semibold hover:text-[#2b818b] cursor-pointer transition-colors">
						سوالات متداول
					</div>
					<div className="footer-link font-semibold hover:text-[#2b818b] cursor-pointer transition-colors">
						تماس با ما
					</div>
				</div>

				<div className="flex flex-row items-center gap-4">
					<div className="bg-[#d6a378] h-10 w-10 rounded-full flex items-center justify-center">
						<img className="h-8" src={Instagram} alt="Instagram" />
					</div>
					<div className="bg-[#d6a378] h-10 w-10 rounded-full flex items-center justify-center">
						<img className="h-8" src={Search} alt="" />
					</div>
					<div className="bg-[#d6a378] h-10 w-10 rounded-full flex items-center justify-center">
						<img className="h-8" src={Telegram} alt="Telegram" />
					</div>
				</div>
			</div>

			<div className="flex justify-between pr-8 mt-10">
				<div className="flex gap-3">
					<img className="h-5 w-5" src={Tick} alt="تیک" />
					<span className="font-bold ">پرداخت امن</span>
					<img className="h-7 w-7" src={Check} alt="" />
				</div>
				<div className="flex flex-row gap-2">
					<img className="h-14 w-16 rounded-xl" src={PayPing} alt="پی پینگ" />
					<img className="h-14 w-16 rounded-xl" src={ZarinPal} alt="زرین پال" />
					<img className="h-14 w-16 rounded-xl" src={ZiPal} alt="زرین پال" />
				</div>
			</div>
		</footer>
	);
}

export default FooterComponent;
