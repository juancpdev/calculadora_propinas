import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

export type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {


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
                className=" bg-black text-white w-full py-2"
                onClick={placeOrder}    
            >
                Guardar Orden
            </button>
        </>
    );
}
