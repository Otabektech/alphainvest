import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--spacing-5);
  height: 100%;
`;

const VisualContent = styled(Card)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-5);
`;

const ChartDescription = styled.p`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-400);
  color: var(--generalColor-90);
`;

const CompanyFacts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-5);
`;

export const Company = () => {
  <>
    <h2>Company</h2>
  </>;
};
