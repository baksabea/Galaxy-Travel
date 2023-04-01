import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className='form-container'>
        <form action="" method='post'>
            <label >Név</label>
            <input type="text" />

            <label>Email cím</label>
            <input type="text"  />

            <label >Tárgy</label>
            <input type="text" />

            <label>Üzenet</label>
            <textarea cols="6" placeholder='Írj egy üzenetet...'></textarea>

            <button type="submit" className="btn">Küldés</button>
        </form>
    </div>
  )
}

export default Form