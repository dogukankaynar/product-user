import React from "react";

function ItemCard({ name,id,onEdit,onDelete }) {
  return (
    <div className="list-item" key={id}>
      {name}
      <div className="icon-item">
        <span
          onClick={onEdit}
          id={id}
          className="material-symbols-outlined icon"
        >
          edit
        </span>
        <span
          onClick={onDelete}
          className="material-symbols-outlined icon"
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default ItemCard;
