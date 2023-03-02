import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Content = ({ itemsRem }) => {
  return (
    <main>
      Items List:
      <ul>
        {itemsRem.map((item) => (
          <li className="item">
            <input type="checkbox" name="check" id="check" />
            id: {item.id} {item.item}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;