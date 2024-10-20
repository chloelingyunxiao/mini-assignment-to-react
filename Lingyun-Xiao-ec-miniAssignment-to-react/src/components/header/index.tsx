import React from "react";
import "./style.css";

export const Header = ({ headerContent }) => {
  const content = headerContent || "Here is the header content";
  return <h1 className="header">{content}</h1>;
};
