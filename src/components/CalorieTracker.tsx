import { useMemo } from "react"
import { Activity } from "../interfaces"
import CalorieDisplay from "./CalorieDisplay"

interface CalorieTrackerProps {
    activities: Activity[]
}

const CalorieTracker = ({ activities }: CalorieTrackerProps) => {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0 ) , [activities])
    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0 ) , [activities])
    const netCalories = useMemo(()=> caloriesConsumed - caloriesBurned ,[activities])

    return (
        <>
            <h2 className="text-4xl text-white font-black text-center">
                Resumen de calorias
            </h2>
            
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay
                    calories = {caloriesConsumed}
                    text = 'Consumidas'
                />
                <CalorieDisplay
                    calories = {caloriesBurned}
                    text = 'Quemdas'
                />
                <CalorieDisplay
                    calories = {netCalories}
                    text = 'Diferencia'
                />
            </div>

        </>
    )
}

export default CalorieTracker
