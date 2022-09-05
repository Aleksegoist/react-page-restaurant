import React from 'react';
import s from './Menu.module.css';
import def from '../../style.module.css';
import MenuImg from '../../assets/menu_img.png';
import MenuItem1 from '../../assets/item1.png';
import MenuItem2 from '../../assets/item2.png';
import MenuItem3 from '../../assets/item3.png';
import MenuItem4 from '../../assets/item4.png';
import MenuItem5 from '../../assets/item5.png';
import MenuItem6 from '../../assets/item6.png';
import MenuItem7 from '../../assets/item7.png';
import MenuItem8 from '../../assets/item8.png';
import MenuItem9 from '../../assets/item9.png';
import MenuItem10 from '../../assets/item10.png';

const Menu = () => {
  return (
    <div className={s.menu}>
      <div className='container'>
        <div className={s.main_title}>
          <h3>Menu</h3>
        </div>
        <div className={s.box}>
          <div className={s.left}>
            <h1 className={`${def.title} ${s.title_size}`}>
              Try Our Special dishes
            </h1>
            <p className={`${def.text} ${s.text_size}`}>
              Every time you perfectly dine with us, it should happy for great
              inspired food in an environment designed with individual touches
              unique to the local area.
            </p>
            <img src={MenuImg} alt='img' />
            <button className={def.btn}>See all dishes</button>
          </div>
          <div className={s.right}>
            {/* --- Starters --- */}
            <div className={s.starters}>
              <h1 className={`${def.title} ${s.title_right_block}`}>
                Starters
              </h1>
              {/* ----------------------------------------------- */}
              <div className={s.starters_block}>
                <div className={s.text_box}>
                  <div>
                    <img src={MenuItem1} alt='img' />
                  </div>
                  <div className={s.bottom_line}>
                    <div>
                      <h2 className={s.item_title}>Raw Scallops from Erquy</h2>
                      <p className={`${def.text} ${s.line}`}>
                        Shuck the scallop to that used for oysters
                      </p>
                    </div>
                    <div>
                      <p className={s.price}>$40</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------------------------------------------------------- */}
              <div className={s.starters_block}>
                <div>
                  <img src={MenuItem2} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>Spring Roll</h2>
                  <p className={def.text}>
                    Add oil to a hot pan spring onion whites
                  </p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$20</p>
              </div>
              <div className={s.starters_block}>
                <div>
                  <img src={MenuItem3} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>French Onion Soup</h2>
                  <p className={def.text}>
                    Wheat flour, apple cider vinegar, bread
                  </p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$25</p>
              </div>
              <div className={s.starters_block}>
                <div>
                  <img src={MenuItem4} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>Tomato Bruschetta</h2>
                  <p className={def.text}>
                    Bread, olive oil, garlic, black pepper
                  </p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$30</p>
              </div>
            </div>
            {/* --- Main Dish --- */}
            <div className={s.main_dish}>
              <h1 className={def.text}>Main Dish</h1>
              <div className={s.dish_block}>
                <div>
                  <img src={MenuItem5} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>
                    Grilled Salmon with Dill Sauce
                  </h2>
                  <p className={def.text}>
                    Brown sugar, salmon fillet, Dijon mustard
                  </p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$40</p>
              </div>
              <div className={s.dish_block}>
                <div>
                  <img src={MenuItem6} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>Roast Beef with Vegetable</h2>
                  <p className={def.text}>
                    Green beans, rib eye, olive oil, beef
                  </p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$20</p>
              </div>
              <div className={s.dish_block}>
                <div>
                  <img src={MenuItem7} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>Marrkesh Vegetetarian Curruy</h2>
                  <p className={def.text}>
                    Sweet potato, eggplant, garbanzo bean
                  </p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$25</p>
              </div>
              <div className={s.dish_block}>
                <div>
                  <img src={MenuItem8} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>Spicy Vegan Potato Curry</h2>
                  <p className={def.text}>
                    Coconut milk, beans, potatoes, curry powder
                  </p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$35</p>
              </div>
            </div>
            {/* --- Desert --- */}
            <div className={s.desert}>
              <h1 className={def.text}>Dessert</h1>
              <div className={s.dessert}>
                <div>
                  <img src={MenuItem9} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>Apple Pie with Cream</h2>
                  <p className={def.text}>
                    Whipping cream, egg white, cinnamon
                  </p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$15</p>
              </div>
              <div className={s.dessert}>
                <div>
                  <img src={MenuItem10} alt='img' />
                </div>
                <div>
                  <h2 className={s.item_title}>Lemon Meringue Pie</h2>
                  <p>Frozen pie crust, meringue, lemon</p>
                </div>
                <div className={s.line}></div>
                <p className={s.price}>$30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
