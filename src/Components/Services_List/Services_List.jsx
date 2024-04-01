import React from 'react';
import './Services_List.css'


const Services_List = ({ title, listItems, iconColor }) => {
  return (
    <div className='flex flex-col justify-center items-center my-12 bg-cyan-100'>
      <h1 className='text-3xl md:text-5xl font-bold my-6'>{title}</h1>
      <div className='flex flex-wrap text-white w-3/4 mb-4 justify-between'>
        <ul>
          {listItems.map((item, index) => (
            <li   key={index} className='li-st  mb-2 text-black text-lg font-medium md:text-start text-center flex justify-start items-start'>
              <i  style={{ color: iconColor}} className="li-ico fas fa-check font-bold md:mr-2 " ></i>
              <div className='li-st-txt  '>
              {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services_List;
