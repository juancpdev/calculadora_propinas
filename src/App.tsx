import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reducer";
import { useReducer } from "react";

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="header py-20 text-center">
        <h1 className=" text-white text-2xl font-black md:text-4xl">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-10 grid md:grid-cols-2 md:py-20">
        <div className=" mx-5 md:mx-10">
          <h2 className=" py-5 font-black text-4xl">Menú</h2>

          <div className=" space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem 
              key={item.id}
              item={item}
              dispatch={dispatch}
              />
              ))}
          </div>
          
        </div>

        <div className=" mx-5 mt-10 border border-dashed border-slate-300 p-5 rounded-lg space-y-10 md:mx-0 md:mt-0">
          {state?.order.length ? (
            <>
                <OrderContents
                    order={state.order}
                    dispatch={dispatch}
                />

                <TipPercentageForm
                  dispatch={dispatch}
                  tip={state.tip}
                />

                <OrderTotals 
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
            </>
          ) : (
            <p className=" text-center">La orden está vacía</p> 
          )}
              
        </div>
        
      </main>
    </>
  )
}

export default App
