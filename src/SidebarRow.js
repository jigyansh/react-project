import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ title, Icon, src }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} className="sidebar__avatar" />}
      {Icon && <Icon />}
      <h5>{title}</h5>
    </div>
  );
}

export default SidebarRow;
