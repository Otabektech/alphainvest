import moment from "moment";
import { FinnhubAPI } from "../../api";
import { Actions, ActionType } from "../actions";
import { IposByPeriod } from "../state";
import { createKeyFromTwoDates } from "../../utils";
import { CompanyIpo } from "../../types";

const finnhub = new FinnhubAPI();

const sortByDate = (ipos: CompanyIpo[]) => {};

export const fetchIpos = async (
  from: string,
  to: string,
  queryBy: "weekly" | "monthly",
  data: IposByPeriod,
  dispatch: (action: ActionType) => void
) => {};
