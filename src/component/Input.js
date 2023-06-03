import React from 'react';


const Input = ({ label, ...props }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input {...props}></input>
        </div>
    )
}
export default Input;