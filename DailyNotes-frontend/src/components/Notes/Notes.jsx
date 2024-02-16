import React from "react";

const Notes = ({ data }) => {
  return (
    <>
      <li className="notepad-infos">
        <div>
          <strong>{data.title}</strong>
          <div>x</div>
        </div>

        <textarea defaultValue={data.notes}></textarea>
        <span>!</span>
      </li>
    </>
  );
};

export default Notes;
