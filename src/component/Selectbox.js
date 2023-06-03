import React from 'react';

const SelectBox = ({ title = "", data = [], ...props }) => {
    return (
        <select {...props}>
            <option value={""} selected disabled>{title}</option>
            {data.map((item, index) => (
                <option key={index} value={item.value}>{item.label}</option>
            ))}
        </select>
    )
}

export default SelectBox;