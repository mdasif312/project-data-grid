import React from "react";
import "./Row.css";
import RowColumn from "./../RowColumn";

function Row(props) {
  const data = props.data;
  const widthPercent = 100 / props.data.data.length;
  const rowColumns = props.colIds.map(colId => {
    let res = data.data.filter(obj => obj.id == colId);
    if (res) {
      if (res.length == 1) {

        return <RowColumn id={colId} value={res[0].value} widthPercent={widthPercent} />;
      }
    }
    return <RowColumn id={colId} value={""} widthPercent={widthPercent} />;

  });
  return (
    <div className="row" key={props.key}>
      {rowColumns}
    </div>
  );
}

export default Row;
