import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function SubMenuView({menus }) {
  let items = [];
  if (menus != null) {
    for (let m = 0; m < menus.length; m++) {
      if (menus[m].values[0].rendered) {
        items.push(<div key={m} >
          {menus[m].values[0].value}
          </div>);
      }
    }
  }
    return (
      <div>
        {items}
      </div>
    );
}


SubMenuView.propTypes = {
  menus: PropTypes.array
};
