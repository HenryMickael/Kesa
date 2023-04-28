import React from 'react';
import '../style/Host.css'

const Host = ({host}) => {
  return (
        <div className='host_name_pic' >
            <p>{host.name}</p>
            <img src={host.picture} alt="" />
        </div>
    );
};

export default Host;