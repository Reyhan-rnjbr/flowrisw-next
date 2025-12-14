import Image from "next/image";
import Productivity from "./UI/Productivity";
import Users from "./UI/Users";
import Robust from "./UI/Robust";
import Features from "./featuresPage/page";
import Unleash from "./UI/Unleash";
import FeaturesRobust from "./UI/FeaturesRobust";

export default function Home() {
  return (
    
      <div>
        <Productivity/>
        <Users/>
        <Robust/>
        <FeaturesRobust/>
        <Unleash/>
      </div>
  );
}
