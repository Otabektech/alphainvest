import { useEffect } from "react";
import styled from "styled-components";

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

export const IpoCalendar = () => {
  return (
    <>
      <h2>Ipocalendar</h2>
    </>
  );
};
