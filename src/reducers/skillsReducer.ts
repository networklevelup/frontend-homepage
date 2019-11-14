import { ISkills } from "../interfaces/interfaces";
import { TAction } from "../actions/actionsTypes";


export const skillsReducer = (
    state: ISkills[] = [],
    actions: TAction
): ISkills[] => {
    if(actions.type === "SET_SKILLS") {
        return actions.skills;
    }
    return state;
}