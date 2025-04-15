import React from "react";
import { useRoutes } from "react-router";
import FundamentalsMenu from "./FundamentalsMenu";
import IntroReact from "./IntroReact";
import UnderstandingOfJsx from "./UnderstandingOfJsx";

function FundamentalsRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <FundamentalsMenu />,
      children: [
        {
          path: "introReact",
          element: <IntroReact />,
        },
        {
          path: "understandingOfJsx",
          element: <UnderstandingOfJsx />,
        },
      ],
    },
  ]);
  return routes;
}
export default FundamentalsRoutes;
