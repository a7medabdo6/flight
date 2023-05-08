import React, { useEffect, useState } from 'react';
import Countries from './Dashboard/components/NavBar/Countries';

function Data() {
  const [arr, setarr] = useState([]);
  const [arrtwoway, setarrtwoway] = useState([]);
  const items = Countries();
  console.log(arr, 'ddddd');
  useEffect(() => {
    console.log(arr, 'itemssss');
    if (items?.arr?.length > 0) {
      setarr(items?.arr);
      setarrtwoway(items?.arrtwoway);
    }
    return () => {};
  }, [items]);
  return [
    {
      type: 'group',
      text: 'Menu'
    },
    {
      type: 'firstGroup',
      text: 'Bookings',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      menu: [
        {
          type: 'firstLink',
          text: 'Flights',
          link: '/Flight',
          active: 'Flights'
        },
        {
          type: 'firstGroupflex',
          text: 'Seats',
          active: 'Seats',

          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          ),
          menu: [
            {
              type: 'firstGroupnotFlex',
              text: 'One Way',
              link: '/seats/one-way/Ar/Ab',
              active: 'One Way',
              menu: arr
            },
            {
              type: 'firstGroupnotFlex',
              text: 'Two Way',
              link: '/twoway/Ar/Ab',
              active: 'Two Way',
              menu: arrtwoway
            }
          ]
        }
      ]
    },
    {
      type: 'firstGroup',
      text: 'Entry',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
      menu: [
        {
          type: 'firstLink',
          text: 'Suppliers',
          link: '/Suppliers',
          active: 'Suppliers'
        },
        {
          type: 'firstLink',
          text: 'Country',
          link: '/Country',
          active: 'Country'
        },
        {
          type: 'firstLink',
          text: 'Cities',
          link: '/city',
          active: 'Cities'
        },
        {
          type: 'firstLink',
          text: 'Airlines',
          link: '/Company',
          active: 'Airlines'
        },
        {
          type: 'firstLink',
          text: 'Airports',
          link: '/Airports',
          active: 'Airports'
        }
      ]
    }
  ];
}

export default Data;
