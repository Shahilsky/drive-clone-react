import React from "react";
import "./Sidebar.css";

import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__new">
        <Button className="sidebar__newButton">
          <img
            src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"
            alt="plus"
          />
          <div className="sidebar__text">New</div>
        </Button>
      </div>

      <div></div>
    </div>
  );
}

export default Sidebar;
