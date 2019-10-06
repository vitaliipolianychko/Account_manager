import React from 'react';
import "./style.css";

 export const myInput = (props) =>{
    const {input, type, placeholder, meta}=props;
    return (
      <>
        <input {...props.input} type={props.type} placeholder={props.placeholder} className="input" />
        {meta.error &&
        meta.touched && (
        <div>
          {meta.error}
        </div>
      )}
      </>
    );
};
