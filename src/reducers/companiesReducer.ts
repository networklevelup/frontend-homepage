import { TAction } from "../actions/actionsTypes";
import { ICompany } from "../interfaces/interfaces";

export const companiesReducer = (
  state: ICompany[] = [],
  action: TAction
): ICompany[] => {
  if (action.type === "SET_COMPANIES") {
    return action.companies;
  }
  if (action.type === "DELETE_COMPANY") {
    const companies = state;
    const index = companies.findIndex(c => c._id === action.company_id);
    companies.splice(index, 1);
    return [...companies];
  }
  if (action.type === "PUT_COMPANY") {
    const companies = state;
    const index = companies.findIndex(c => c._id === action.company_id);
    companies[index] = action.company;
    return [...companies];
  }
  if (action.type === "CREATE_COMPANY") {
    const companies = state;
    companies.push(action.company);
    return [...companies];
  }
  return state;
};
