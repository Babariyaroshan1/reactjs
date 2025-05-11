import React from 'react'
import { useRoutes } from 'react-router';
import ProjectMenu from './ProjectMenu';
import Task from './task';
import WordCounter from './wordcounter';
import PasswordShowHide from './PasswordShowHide';
import SimpleBackgroundColorChanger from './Bgcolorchanger';
import Lightdarkmodbtn from './lightdarkmodbtn';



function ProjectRoute() {
  const routes = useRoutes([
    {
      path: "/",
      element: <ProjectMenu />,
      children: [
        {
          path: "task",
          element: <Task />,
        },
        {
          path: "Bgcolorchanger",
          element: <SimpleBackgroundColorChanger />,
        },
        {
          // 4th task 
          path: "passwordshowhide",
          element:<PasswordShowHide />,
        },
        {
          // 5th task
          path: "wordcounter",
          element:<WordCounter />,
        },
        {
          // 6th task
          path: "lightdarkmodbtn",
          element:<Lightdarkmodbtn />,
        },
      ],
    },
  ]);
  return routes;
}
export default ProjectRoute;