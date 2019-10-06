import React from "react";
import { Route, Switch } from "react-router-dom";

/** Custom components */
import Submenu from "components/Layout/Submenu";

/** Helpers */
import getComponentByRoute from "helpers/componentByRoutes";

function SubSection({ menu, subsection, path }) {
  const selectedMenu = menu.find(menuItem => menuItem.file === subsection);
  const childrens = (selectedMenu) ? selectedMenu.children : [];

  return (
    <>
      <Submenu subsection={subsection} subMenu={childrens} />
      <Switch>
        {
          childrens.map(children => {
            const Component = getComponentByRoute(children.file);
            return <Route key={children._id} path={`${path}/${children.file}`} component={Component} />
          })
        }
      </Switch>
    </>
  )
}

export default SubSection
