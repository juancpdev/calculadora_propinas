import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem["id"]) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className=' font-black text-4xl'>Consumo</h2>

        <div className="mt-14">
          {order.map( item => (
                <div 
                  key={item.id}
                  className="flex justify-between items-center py-3 border-t last-of-type:border-b "
                  >
                  <div className="">
                    <p>
                      {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className="font-bold">
                      Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                  <div>
                    <button
                      className=" bg-red-500 text-white font-medium h-7 w-7 rounded-full"
                      onClick={()=>removeItem(item.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))
            } 
        </div>
    </div>
  )
}
