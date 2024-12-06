import { Fragment } from "react";

import AppLogo from "../../components/common/AppLogo/AppLogo";
import MomentumHeader from "components/common/MomentumHeader/MomentumHeader";

import "./HomeStyle.css";
import BodyPartPicker from "components/common/BodyPartPicker/BodyPartPicker";

function Home() {
  return (
    <Fragment>
      <AppLogo />
      <MomentumHeader />
      <BodyPartPicker />
    </Fragment>
  );
}

export default Home;
