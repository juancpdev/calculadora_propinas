import type { MenuItem } from "../types"
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch } : MenuItemProps) {
  return (
    <button 
      className=" border-2 rounded-lg border-teal-400 hover:bg-teal-200 p-3 w-full flex justify-between"
      onClick={() => dispatch({type: "add-item", payload: {item}})}
    >
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  )
}
