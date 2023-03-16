import { useEffect } from "react";
import styled from "styled-components";

import {
  AppContentHeader,
  Card,
  Table,
  TableHead,
  TableBody,
  TableHeadCell,
  TableRow,
  TableRowHeadCell,
  TableBodyCell,
  ButtonFilter,
  Badge,
  Loading,
  Empty,
  BadgeVariantProps,
} from "../../../components";
import { useStore } from "../../../context";
import { Actions, fetchIpos, IpoQueryBy } from "../../../store";

const CalendarControl = styled.div`
  font-size: var(--font-size-4);
  font-weight: var(--line-height-4);
  color: var(--generalColor-60);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-4);

  div {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);

    span {
      color: var(--generalColor-70);
      cursor: pointer;

      &:hover {
        color: var(--primaryColor-100);
      }
    }
  }
`;
const CalendarCard = styled(Card)`
  height: calc(100% - 8rem);
`;

const IPO_STATUS_BADGE_MAP = {
  withdrawn: "red",
  priced: "blue",
  filed: "yellow",
  expected: "green",
};

export const IpoCalendar = () => {
  const {
    state: {
      ipoCalendar: { data, currentMonth, currentWeek, queryBy, isLoading },
    },
    dispatch,
  } = useStore();

  useEffect(() => {
    fetchIpos(currentWeek.from, currentWeek.to, "weekly", data, dispatch);
    fetchIpos(currentMonth.from, currentMonth.to, "monthly", data, dispatch);
  }, [dispatch]);

  return (
    <>
      <h2>Ipocalendar</h2>
    </>
  );
};
