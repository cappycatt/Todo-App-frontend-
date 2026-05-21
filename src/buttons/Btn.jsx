import React from 'react'

function Btn(props) {
    const { BtnName, BtnType, BtnFunction } = props;
  return (
    <div>
      <button
        className="text-white shadow-sm rounded-xl p-2 m-2 bg-blue-500 hover:bg-blue-600 w-25 hover:shadow-2xl"
        type={BtnType}
        onClick={BtnFunction}
      >
        {BtnName}
      </button>
    </div>
  );
}

export default Btn