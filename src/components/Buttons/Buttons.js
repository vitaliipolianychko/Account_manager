import React from 'react';

import styles from './Buttons.module.css';

export const ButtonBack =(props) =>{
    return (
      <button type="submit" className={styles.btnBack} onClick={props.onClick}>
        Back
      </button> 
    );
};
export const ButtonForward=(props)=>{
    return (
      <button type="submit" className={styles.btnForward} onClick={props.onClick}>
        Forward
      </button> 
    );
};

export const ButtonSubmit =(props) => {
    return (
      <button type="submit" className={props.className} onClick={props.onClick}>
        FInish
      </button> 
    );
};