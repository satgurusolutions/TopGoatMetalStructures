const ServiceAreaDetails = () => {
  return (
    <section className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:items-start">
        <div>
          <h2 className="text-center text-3xl font-bold text-black md:text-start xl:text-[56px]">
            <span className="text-primary">The Warrior Difference</span>
            <br />
            Trusted Across America for Metal Building Excellence
          </h2>
        </div>
        <div>
          {' '}
          <p className="text-center text-base md:text-start xl:text-2xl">
            From bustling cities to serene countryside settings, Top Goat Metal Structures provides
            versatile and dependable steel structures tailored to meet your unique needs. With a
            legacy of excellence, we bring durability and innovation to every project we undertake.
            Explore the 25 states we proudly serve below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaDetails;
