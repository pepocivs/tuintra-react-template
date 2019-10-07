/* eslint-disable no-restricted-globals */
import React from "react";
import { Link } from "react-router-dom";

/** Custom components */
import Highlighted from "components/UI/Highlighted/Highlighted";
import GridBox from "components/UI/GridBox/GridBox";

function Submenu({subMenu, subsection, page}) {  
    return (
      <GridBox>
        {subMenu.map(menu => {
          if(!menu.visible) return null;
          return (
            <Link key={menu._id} to={`/${subsection}/${menu.file}`}>
              <Highlighted selected={(page === menu.file)}>{menu.title}</Highlighted>
            </Link>
          )
        })}
      </GridBox>
    )
  }


export default Submenu;

