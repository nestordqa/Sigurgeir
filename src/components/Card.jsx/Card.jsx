import React from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from '../../styles/card.module.css';

// "homepage": "https://nestordqa.github.io/Sigurgeir/",

export const Card = ({id, title, price, description, images, category}) => {
  return (
    <div className={styles.card}>
        <div className={styles.images}>
            <img className={styles.image} alt={title} src={images[0]}/>
        </div>
        <div className={styles.description}>
            <div className={styles.title}>
                <div className={styles.product}>
                    {title}
                </div>
                <div className={styles.price}>
                    {`${price}$`}
                </div>                  
            </div>
            <div className={styles.info}>
                <div className={styles.size}>
                    <div className={styles.sizeTitle}>
                        Sizes:
                    </div>
                    <div className={styles.sizes}>
                        <div className={styles.item}>
                            S
                        </div>
                        <div className={styles.item}>
                            M
                        </div>
                        <div className={styles.item}>
                            L
                        </div> 
                        <div className={styles.item}>
                            XL
                        </div>       
                    </div>
                </div>
                <div className={styles.colors}>
                    <div className={styles.sizes}>
                        <div className={styles.color} style={{backgroundColor:'#00ffff'}}>
                        </div>
                        <div className={styles.color} style={{backgroundColor:'#ff0000'}}>
                        </div>
                        <div className={styles.color} style={{backgroundColor:'#ffa200'}}>
                        </div> 
                        <div className={styles.color} style={{backgroundColor:'#188500'}}>
                        </div>       
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className='button'>
                    Add to cart!
                    <HiOutlineShoppingCart 
                        style={
                            {marginBottom: '-3px',
                            marginLeft:'5px'}
                            }
                    />
                </button>
                <button className='button'>
                    Description
                </button>
            </div>
        </div>
    </div>
  );
};
