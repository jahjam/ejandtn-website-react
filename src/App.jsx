import React, { Suspense } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ContainerDivStyled = styled.div`
  margin: 0 auto;
  height: 100%;
`;

const Home = React.lazy(() => import('./home/Home'));
const Shop = React.lazy(() => import('./shop/Shop'));
const DayTickets = React.lazy(() => import('./day-tickets/DayTickets'));
const Result = React.lazy(() => import('./day-tickets/Result'));
const Archive = React.lazy(() => import('./day-tickets/Archive'));

function App() {
  const location = useLocation();

  return (
    <ContainerDivStyled>
      <Routes location={location} key={location.pathname.split('/')[1]}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/day-tickets" element={<DayTickets />} />
        <Route path="/day-tickets/:resultId" element={<Result />} />
        <Route path="/day-tickets/archive" element={<Archive />} />
      </Routes>
    </ContainerDivStyled>
  );
}

export default App;
