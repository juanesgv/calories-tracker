import { Activity } from "../interfaces"

export type ActivityActions =
{
    type: 'save-activity',
    payload: { newActivity : Activity}
}

interface ActivityState {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        //maneja la lógica para actualizar el state
        
        return{
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state
}