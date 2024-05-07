import { useMemo, Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

export type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {


    const subtotalAmount = useMemo(() => (order.reduce((total, item) => total + (item.price * item.quantity), 0)), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
    const totalAmount = useMemo(() => tipAmount + subtotalAmount , [subtotalAmount, tipAmount])

    return (
        <>
            <div className=" space-y-3">
                <h2 className=" font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {" "}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina: {" "}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a pagar: {" "}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button 
                className=" bg-orange-500 text-white w-full py-2"
                onClick={() => dispatch({type : "place-order"})}    
            >
                Guardar Orden
            </button>
        </>
    );
}
