import React from "react";
import ShopLiveFishPanel from "../../components/Panels/ShopLiveFishPanel";
import FeaturedRamsYouPanel from '../../components/Panels/FeaturedRamsPanel';
import ExploreOtherSpeciesPanel from '../../components/Panels/ExploreOtherSpeciesPanel'
import FollowUsPanel from '../../components/Panels/FollowUsPanel'


function Home () {

  return (
    <div className="home">
      <ShopLiveFishPanel/>
      <FeaturedRamsYouPanel/>
      <ExploreOtherSpeciesPanel/>
      <FollowUsPanel/>
    </div>
  );
}

export default Home;