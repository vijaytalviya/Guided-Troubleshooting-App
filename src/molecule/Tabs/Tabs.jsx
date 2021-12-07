import React, { useState, useRef } from "react";
import "./tabs.scss";

const Tabs = ({ children }) => {
  const [activeItem, setActiveItem] = useState(1);
  const tabItemRefs = useRef(
    Array.from({ length: React.Children.count(children) }, (index) =>
      React.createRef()
    )
  );

  const handleClickOnTab = (index) => {
    setActiveItem(index + 1);
  };

  const handleTabItems = (children) => {
    return children.map((tab, key) => {
      return (
        <li
          ref={tabItemRefs[key]}
          key={key}
          onClick={(e) => handleClickOnTab(key)}
          className={`tabs-item ${
            activeItem === key + 1 ? " active-tab--title" : ""
          }`}
        >
          <div className="text-wrapper">{tab.props.title}</div>
        </li>
      );
    });
  };

  return (
    <div className={`tabs `}>
      <div className="tabs-header">
        <ul className={`tabs-items `}>{handleTabItems(children)}</ul>
      </div>

      <div className="tabs-content">
        {children.map((item, key) => {
          return (
            <div
              className={`tabs-content-item ${
                activeItem === key + 1 ? "active-tab--content" : ""
              }`}
              key={key}
            >
              {item.props.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Tab = ({ title }) => <li>{title}</li>;

export default Tabs;
