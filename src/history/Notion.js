import React from 'react'
import './Notion.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const Notion = ({text, id, value}) => {
  const {deleteTransaction} = useContext(GlobalContext)

  const style = value >0 ? 'plus': 'minus'
  const textValue = value>0 ? '+'+value: value
  return (
    <li className={`product ${style}`} id={id}>
      <p className='product-name'>{text}</p>
      <span className='product-price'>{textValue}</span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
    </li>
  )
}

export default Notion