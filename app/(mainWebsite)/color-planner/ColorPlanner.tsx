'use client';

import Image from 'next/image';
import { useState } from 'react';
import './color-planner.css';

type ColorOption = {
  key: string;
  name: string;
  hex: string;
  roof: string;
  side: string;
};

const baseImage = '/images/color-planner/building.jpg';

const colors: ColorOption[] = [
  {
    key: 'barn-red',
    name: 'Barn Red',
    hex: '#8f2d1f',
    roof: '/images/color-planner/5eef9e_9f065df2bb234b1585c73b812eb55a55~mv2.png',
    side: '/images/color-planner/5eef9e_5d8504bc72244eff806d3be2f776a4f2~mv2.png',
  },
  {
    key: 'black',
    name: 'Black',
    hex: '#1f1f1f',
    roof: '/images/color-planner/5eef9e_d56cfa98c3604926bd86affedc36c32a~mv2.png',
    side: '/images/color-planner/5eef9e_2524d72b478849ddbed176940dbdced5~mv2.png',
  },
  {
    key: 'burgundy',
    name: 'Burgundy',
    hex: '#6b1f2b',
    roof: '/images/color-planner/5eef9e_449591f4002f4dadbbee3249baf2f55d~mv2.png',
    side: '/images/color-planner/5eef9e_401ea57c2a2745ad8c31b63554fee86f~mv2.png',
  },
  {
    key: 'clay',
    name: 'Clay',
    hex: '#b8a58a',
    roof: '/images/color-planner/5eef9e_22a23c249acb4f6e9cf2ba7c1cfbb848~mv2.png',
    side: '/images/color-planner/5eef9e_4c76d22b3927452798215c803e10b5fd~mv2.png',
  },
  {
    key: 'copper',
    name: 'Copper',
    hex: '#b87333',
    roof: '/images/color-planner/5eef9e_9d85a8ab61214d26a5613aa271cc5a8d~mv2.png',
    side: '/images/color-planner/5eef9e_b8bea36c8cef471a849c86a1a60453d8~mv2.png',
  },
  {
    key: 'crimson-red',
    name: 'Crimson Red',
    hex: '#a32121',
    roof: '/images/color-planner/5eef9e_5c2fc4bd0cc64998819caad6d4d5a4bc~mv2.png',
    side: '/images/color-planner/5eef9e_b698741635964a7d87f99d4ad506e249~mv2.png',
  },
  {
    key: 'earth-brown',
    name: 'Earth Brown',
    hex: '#5a3a1f',
    roof: '/images/color-planner/5eef9e_ce3bd76871cc44db815da3321e2ff3fd~mv2.png',
    side: '/images/color-planner/5eef9e_896083ac2fdf470b8d6b98b3db7d5f10~mv2.png',
  },
  {
    key: 'evergreen',
    name: 'Evergreen',
    hex: '#1f4d2b',
    roof: '/images/color-planner/5eef9e_f1ad04ad36c345e69f8b99be0e9876b5~mv2.png',
    side: '/images/color-planner/5eef9e_c0e304fc54444ebfac121139fa71234d~mv2.png',
  },
  {
    key: 'gallery-blue',
    name: 'Gallery Blue',
    hex: '#1f3f6b',
    roof: '/images/color-planner/5eef9e_bd48c53a2190413aa09c2b782f815234~mv2.png',
    side: '/images/color-planner/5eef9e_f0fd3e57c5e94752ad6d83e8b76fcd6b~mv2.png',
  },
  {
    key: 'pebble-beige',
    name: 'Pebble Beige',
    hex: '#d9d2c3',
    roof: '/images/color-planner/5eef9e_0e82282c1fb6466db13bc660de2c0ce4~mv2.png',
    side: '/images/color-planner/5eef9e_4cb550ca7b4f4e4f9ea5e0b8c56cb79f~mv2.png',
  },
  {
    key: 'pewter-gray',
    name: 'Pewter Gray',
    hex: '#9ea3a8',
    roof: '/images/color-planner/5eef9e_c5e07a7767a6499da5fa517967f609c9~mv2.png',
    side: '/images/color-planner/5eef9e_42ff73c5f93646aba0dd3313a6c28702~mv2.png',
  },
  {
    key: 'quaker-gray',
    name: 'Quaker Gray',
    hex: '#6e6e6e',
    roof: '/images/color-planner/5eef9e_2873ca104def4d7c81ecd0548203379d~mv2.png',
    side: '/images/color-planner/5eef9e_82599b64d2b744cb9f2d779ec685de24~mv2.png',
  },
  {
    key: 'rawhide',
    name: 'Rawhide',
    hex: '#b89a5b',
    roof: '/images/color-planner/5eef9e_45377e24d85248359a2bb27546e3a076~mv2.png',
    side: '/images/color-planner/5eef9e_e91817ed55504c7f89917212b947f18b~mv2.png',
  },
  {
    key: 'sandstone',
    name: 'Sandstone',
    hex: '#d2c7a3',
    roof: '/images/color-planner/5eef9e_e6254021425b498695dff1205ecc1f42~mv2.png',
    side: '/images/color-planner/5eef9e_4de5c19f8dce4d828925ce0f806679b0~mv2.png',
  },
  {
    key: 'slate-blue',
    name: 'Slate Blue',
    hex: '#2f5d7c',
    roof: '/images/color-planner/5eef9e_a3a9130a68fd472c890c1ce59d075809~mv2.png',
    side: '/images/color-planner/5eef9e_efe97715fb4845678063bf9facd7e08a~mv2.png',
  },
  {
    key: 'white',
    name: 'White',
    hex: '#f4f4f4',
    roof: '/images/color-planner/5eef9e_b94b0123121b454ea27021104164f339~mv2.png',
    side: '/images/color-planner/5eef9e_facdc0706fce438caf72334796312062~mv2.png',
  },
  {
    key: 'burnished-slate',
    name: 'Burnished Slate',
    hex: '#4a4f4a',
    roof: '/images/color-planner/5eef9e_e135d428b2a54f2790bae07b53e274ed~mv2.webp',
    side: '/images/color-planner/5eef9e_836b7d230a274d348b4af07078627d00~mv2.webp',
  },
  {
    key: 'galvalume',
    name: 'Galvalume',
    hex: '#cccccc',
    roof: '/images/color-planner/5eef9e_929b26a58f394d409016b1eb92e6c7de~mv2.png',
    side: '/images/color-planner/5eef9e_5393e00ed7404a4284045c7ba1a2358d~mv2.png',
  },
];

export default function ColorPlanner() {
  const [activeColor, setActiveColor] = useState<ColorOption>(
    colors.find((item) => item.key === 'earth-brown') || colors[0],
  );

  return (
    <section className="planner">
      {/*<h2 className="color-heading">COLOR CHART</h2>*/}

      <div className="!mx-auto max-w-[1300px] !px-[15px] !py-5">
        <div className="main-row">
          <div className="colors">
            <div className="floating-btn">
              <span className="text">Click Each Color To Explore</span>
            </div>

            <div className="color-grid">
              {colors.map((color) => (
                <button
                  key={color.key}
                  type="button"
                  className={`color-item ${activeColor.key === color.key ? 'active' : ''}`}
                  onClick={() => setActiveColor(color)}
                >
                  <span className="color-box" style={{ backgroundColor: color.hex }} />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="image-area">
            <Image
              className="base-image"
              src={baseImage}
              alt="Base steel building"
              width={900}
              height={600}
              priority
            />

            <Image
              className="roof-image"
              src={activeColor.roof}
              alt={`${activeColor.name} roof`}
              width={900}
              height={600}
            />

            <Image
              className="side-image"
              src={activeColor.side}
              alt={`${activeColor.name} side`}
              width={900}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
