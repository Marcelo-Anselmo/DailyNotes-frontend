import React from "react";

const Notes = () => {
  return (
    <>
      <li className="notepad-infos">
        <div>
          <strong>Fazer Compras</strong>
          <div>x</div>
        </div>

        <textarea
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          iste fugit obcaecati optio."></textarea>
        <span>!</span>
      </li>
    </>
  );
};

export default Notes;
