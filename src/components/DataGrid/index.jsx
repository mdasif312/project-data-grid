import React from "react";
import "./DataGrid.css";

import Header from "./../Header";
import Rows from "./../Rows";

function DataGrid(props) {
  const data = props.data;
  return (
    <div className="data-grid">
      <Header columnHeaders={data.columnHeaders} />
      <Rows rowData={data.rowData} columnHeaders={data.columnHeaders} />
    </div>
  );
}

export default DataGrid;
