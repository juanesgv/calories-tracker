import { useMemo } from "react"
import { Activity } from "../interfaces"
import { categories } from '../data/categories';

interface ActivityListProps {
    activities: Activity[]
}

const ActivityList = ({ activities }: ActivityListProps) => {

    const categoryName = useMemo(()=> 
        (category: Activity['category']) => 
            categories.map(cat => cat.id === category ? cat.name : '')
        ,[activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-center text-slate-600">Comidas y actividades</h2>

            {activities.map(activity => (
                <div key={activity.id} className="px-5 py-8 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 p-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                            {categoryName(activity.category)}
                        </p>
                        <p className="text-2xl font-bold pt-5">{activity.name}</p>
                        <p className="font-black text-4xl text-lime-500">
                            {activity.calories} {''}
                            <span>Calorias</span>
                        </p>
                    </div>

                    <div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default ActivityList
