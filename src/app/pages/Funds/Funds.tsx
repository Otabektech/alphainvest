import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RowLink } from "../../../components";

import {
  AppContentHeader,
  Card,
  Table,
  TableHead,
  TableBody,
  TableBodyCell,
  TableHeadCell,
  TableRow,
  Seperator,
} from "../../../components";
import { useStore } from "../../../context";
import { Actions } from "../../../store";
import { Fund } from "../../../types";

const Container = styled(Card)`
  display: grid;
  grid-template-columns: 30rem 0.5rem 1fr;
  gap: var(--spacing-7);
  height: calc(100% - 8rem);
`;

export const Funds = () => {
  return (
    <>
      <h2>Funds</h2>
    </>
  );
};
