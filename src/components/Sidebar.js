import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 shadow-lg">
      <div className="p-4 bg-blue-600 text-white font-bold text-lg">
        Data Structures & Algorithms
      </div>
      <ul className="list-none p-0">
        <li className="border-b border-gray-300">
          <Link to="/arrays" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">
            Arrays
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/linked-lists" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">
            Linked Lists
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/stacks" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">
            Stacks
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/queues" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">
            Queues
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/trees" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">
            Trees
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/sorting-algorithms" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">
            Sorting Algorithms
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
