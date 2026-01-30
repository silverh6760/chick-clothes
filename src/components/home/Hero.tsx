function Hero() {
  return (
    <section className="max-w-7xl mx-auto mt-8 grid md:grid-cols-2 gap-6 items-center p-4">
      <img
        src="../../src/assets/images/hero.jpg"
        className="rounded-3xl shadow-lg"
      />
      <div>
        <h2 className="text-4xl font-bold text-[#4a6f7c] mb-4">
          تخفیف ویژه بهاری
        </h2>
        <p className="text-xl text-[#c96b5c] mb-6">تا 50% تخفیف</p>
        <button className="bg-[#4a6f7c] text-white px-6 py-3 rounded-xl">
          خرید کنید
        </button>
      </div>
    </section>
  );
}

export default Hero;
