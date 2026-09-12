import { use } from "react";
import TechCard from "./TechCard";

const TechList = ({ stackDataPromise }) => {
  const techs = use(stackDataPromise);
  return (<>
  {
  techs.map(tech=><TechCard tech={tech}></TechCard>)
  }
  </>);
};

export default TechList;