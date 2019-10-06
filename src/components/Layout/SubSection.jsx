import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router"

/** Custom components */
import Submenu from "components/Layout/Submenu";

/** Helpers */
import getComponentByRoute from "helpers/componentByRoutes";

import { getMenu } from "../../redux/clubInfo/selectors";

const mapStateToProps = (state, props) => ({
  menu: getMenu(state),
});

function SubSection({ menu, match }) {
  const subsection = match.params.subsection;
  const page = match.params.page;
  const path = match.path;
  const selectedMenu = menu.find(menuItem => menuItem.file === subsection);
  const childrens = (selectedMenu) ? selectedMenu.children : [];

  return (
    <>
      <Submenu subsection={subsection} page={page} subMenu={childrens} />
      <Switch>
        {
          childrens.map(children => {
            const route = children.file.split('/')[0];
            const Component = getComponentByRoute(route);
            return <Route key={children._id} path={`${path}/${route}`} component={Component} />
          })
        }
      </Switch>
    </>
  )
}

export default connect(mapStateToProps)(withRouter(SubSection));
