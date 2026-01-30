function Footer() {
  return (
    <footer className="bg-[#e8d9d4] min-h-[248px] py-8 px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-[#d6a378] h-10 w-10 rounded-full flex items-center justify-center">
            <img
              className="h-8"
              src="../../src/assets/instagram-svgrepo-com.svg"
              alt="Instagram"
            />
          </div>
          <div className="bg-[#d6a378] h-10 w-10 rounded-full flex items-center justify-center">
            <img
              className="h-8"
              src="../../src/assets/search-zoom-in-svgrepo-com (1).svg"
              alt=""
            />
          </div>
          <div className="bg-[#d6a378] h-10 w-10 rounded-full flex items-center justify-center">
            <img
              className="h-8"
              src="../../src/assets/telegram-alt-svgrepo-com (1).svg"
              alt="Telegram"
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-5 md:gap-7 items-center text-sm md:text-base mr-10 ">
          <div className="footer-link hover:text-[#2b818b] cursor-pointer transition-colors">
            تماس با ما
          </div>
          <div className="footer-link hover:text-[#2b818b] cursor-pointer transition-colors">
            پاسخ به پرسش‌های متداول
          </div>
          <div className="footer-link hover:text-[#2b818b] cursor-pointer transition-colors">
            قوانین و مقررات
          </div>
          <div className="footer-link hover:text-[#2b818b] cursor-pointer transition-colors">
            پیگیری سفارش
          </div>
          <div className="footer-link hover:text-[#2b818b] cursor-pointer transition-colors">
            سوالات متداول
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <div className="flex flex-row gap-6 md:gap-8 mb-5">
          <div className="h-14 w-14 md:h-16 md:w-16">
            <img
              className="h-full w-full object-contain"
              src="../../src/assets/pay-ping.jpg"
              alt="پی پینگ"
            />
          </div>
          <div className="h-14 w-14 md:h-16 md:w-16">
            <img
              className="h-full w-full object-contain"
              src="../../src/assets/zarin-pal.jpg"
              alt="زرین پال"
            />
          </div>

          <div className="flex items-center gap-3 text-sm md:text-base ml-392">
            <div className="h-8 w-8 flex items-center justify-center">
              <img
                className="h-7 w-7"
                src="../../src/assets/bag-check-svgrepo-com.svg"
                alt=""
              />
            </div>
            <span className="font-bold ">پرداخت امن</span>
            <div className="bg-black h-6 w-6 rounded-full flex items-center justify-center">
              <img
                className="h-5 w-5"
                src="../../src/assets/tick-svgrepo-com.svg"
                alt="تیک"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
