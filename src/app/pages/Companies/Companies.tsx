import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { RowLink } from "../../../components";

import {
  AppContentHeader,
  Card,
  Table,
  TableBody,
  TableHead,
  TableBodyCell,
  TableHeadCell,
  TableRow,
} from "../../../components";

import { useStore } from "../../../context";
import { Actions } from "../../../store";

const Container = styled.div`
  display: flex;
  gap: var(--spacing-7);
  height: calc(100% - 8rem);
`;

const CompaniesCard = styled(Card)`
  flex-basis: 30rem;
  flex-shrink: 0;
`;

export const Companies = () => {
  const {
    state: {
      companies: { data },
    },
    dispatch,
  } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: Actions.FETCH_COMPANIES_DATA,
    });
  }, [dispatch]);

  return (
    <>
      <h2>companies</h2>{" "}
    </>
  );
};
