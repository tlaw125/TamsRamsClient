import React from "react";
import ShopLiveFishPanel from "../../components/Panels/ShopLiveFishPanel";
import FeaturedRamsYouPanel from '../../components/Panels/FeaturedRamsPanel';
import ExploreOtherSpeciesPanel from '../../components/Panels/ExploreOtherSpeciesPanel'
import FeaturedReviewsPanel from "../../components/Panels/FeaturedReviewsPanel";
import FollowUsPanel from '../../components/Panels/FollowUsPanel'
import { Helmet } from "react-helmet-async";


function Home() {

  return (
    <div className="home">
      <Helmet>
        <title>Tam's Rams - Shop Fish Online</title>
        <meta name="description" content="Our store strives to promote the aquarium hobby by providing unique fish to hobbyists across the U.S. We specialize in rams, livebearers, ricefish, angelfish, etc." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tam's Rams" />
        <meta property="og:description" content="Our store strives to promote the aquarium hobby by providing unique fish to hobbyists across the U.S. We specialize in rams, livebearers, ricefish, angelfish, etc." />
        <meta property="og:image" content="https://lh3.googleusercontent.com/tjTuVWllfm44_xebwQjBrPhJxmlWKMl25U3tz5KDGQ-9jJ7YEBpsrHFlhXMruNJiRN1LOBpS4wzO7rNCCkZaArKa5pCtbHMRwjFjAHUS3qDTmWUmb3SRy8M_dd8GzNXeT2Z6NFOs=w2400" />
        <meta
          property="og:url"
          content="https://www.tamsrams.com/"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <ShopLiveFishPanel />
      <FeaturedRamsYouPanel />
      <ExploreOtherSpeciesPanel />
      <img src={"../../../public/images/wavey_line_divider.png"} className="wavey-divider-img"></img>
      <FeaturedReviewsPanel />
      <FollowUsPanel />
    </div>
  );
}

export default Home;