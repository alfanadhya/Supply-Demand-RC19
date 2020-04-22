import React, { useState, useEffect } from 'react'

const Select3 = props  => {

    return (
        <div className={`flex flex-col ${props.divClassName}`}>
            <select
                value={props.value}
                className={`w-full bg-gray-400 mb-3 bg-gray-400 text-gray-700 font-semibold outline-none p-2 rounded-md w-20 text-center`} 
                style={{width: props.width, maxWidth: props.maxWidth, height: 40}} 
                onChange={e => {
                    props.changeUnit(e.target.value, props.index)
                }}
            >
            {props.list.map(item => {
                return(
                    <option key={item.id} value={item.id} className="text-gray-700 font-semibold text-sm outline-none capitalize">
                        {item.name}
                    </option>
                )
            })}
            
            </select>
        </div>
    );
};


export default Select3