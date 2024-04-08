import { Dispatch, SetStateAction } from "react";

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({ setTip, tip } : TipPercentageFormProps) {
  return (
    <div className=" space-y-2">
        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {tipOptions.map(tipOption => (
              
              <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        name="tip"
                        type="radio"
                        value={tipOption.value}
                        onChange={e => setTip(+e.target.value)}
                        checked= {tip === tipOption.value}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
