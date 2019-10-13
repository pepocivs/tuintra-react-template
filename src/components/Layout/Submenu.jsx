/* eslint-disable no-restricted-globals */
import React from "react";
import { Link } from "react-router-dom";

/** Helpers */
import clubInfo from "helpers/clubInfo";

/** Custom components */
import Highlighted from "components/UI/Highlighted/Highlighted";
import GridBox from "components/UI/GridBox/GridBox";

function Submenu({subMenu, subsection, page}) {  
    return (
      <GridBox>
        {subMenu.map(menu => {
          if(!menu.visible) return null;
          return (menu.file !== "intranet")
            ? (
              <Link key={menu._id} to={`/${subsection}/${menu.file}`}>
                <Highlighted selected={(page === menu.file)}>{menu.title}</Highlighted>
              </Link>
            )
            : (
            <a key={menu._id} target="_blank" without rel="noopener noreferrer" href={`${clubInfo.tuintraDomain}/intranet`}>
              <Highlighted selected={(page === menu.file)}>{menu.title}</Highlighted>              
            </a>
            );
        })}
      </GridBox>
    )
  }


export default Submenu;

