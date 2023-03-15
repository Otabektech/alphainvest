import { nanoid } from "nanoid";
import {
  EmailWebsites,
  FundingRound,
  Company,
  Companies,
  Months,
  Years,
} from "../types/types";

const generateCompanyData = (
  COMPANIES: string[],
  EMAIL_WEBSITES: EmailWebsites[],
  HQ: string[],
  INDUSTRIES: string[],
  BUSINESS_MODELS: string[],
  FUNDING_ROUNDS: FundingRound[],
  MONTHS: Months[],
  YEARS: Years[]
) => {
  const data: Companies = {};

  return data;
};

export default generateCompanyData;
