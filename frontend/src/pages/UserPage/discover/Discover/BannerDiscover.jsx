import DiscoverNav from "../../../../components/User/DiscoverNav";
const BannerDiscover = () => {
  return (
    <div className="hero-discover">
      <div className="container">
        {/* Hero Overlay */}
        <div className="row">
          <div className="col-12">
            <div className="hero-overlay"></div>
          </div>
        </div>

        {/* Navigation Bar */}
        <DiscoverNav />

        {/* Hero Content */}
        <section className="hero-content text-white">
          <div className="container">
            <div className="div">
              <div className="col-12">
                <h1 className="text-start">Yogyakarta is full of surprises, go explore!</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BannerDiscover;
