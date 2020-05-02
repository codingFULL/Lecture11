import React from 'react';

const ListItems = (props) => {
  const items = props.items;
  const listItems = items.map((x) => {
    return (
      <div key={x.key}>
        <p>
          {x.text}{' '}
          <button
            onClick={() => {
              props.deleteItem(x.key);
            }}
          >
            {' '}
            borrar
          </button>
        </p>
      </div>
    );
  });
  return listItems;
};

export default ListItems;
