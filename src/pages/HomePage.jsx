import BookingZone from "../components/BookingZone";
import HomeHeader from "../components/HomeHeader";
import HomeHero from "../components/HomeHero";
import HomeResult from "../components/HomeResult";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <HomeHero />
      <BookingZone />
      <HomeResult />
    </>
  );
}

export default HomePage;
