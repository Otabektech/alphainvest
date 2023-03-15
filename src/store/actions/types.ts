import { FundsActions } from "./funds";
import { CompaniesActions } from "./companies";
import { IpoCalendarActions } from "./ipoCalendar";
import { CompanyIpo } from "../../types";
import { IpoQueryBy } from "../state";

export const Actions = {
  ...FundsActions,
  ...CompaniesActions,
  ...IpoCalendarActions,
};
export type ActionsType = FundsActions | CompaniesActions | IpoCalendarActions;

export type ActionType =
  | FetchFundsDataAction
  | SortFundsInvestedIn
  | FetchCompaniesData
  | FetchIpoCalendar
  | SetIpoQueryBy
  | SetIpoCalendarIsLoading;
