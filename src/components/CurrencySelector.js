import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Currency : {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="₹">₹ Ruppee</option>
        <option value="€">€ Euro</option>
        <option value="CAD">CAD Canadian Dollar</option>
      </select>	
      }	
    </div>
    );
};

export default CurrencySelector;