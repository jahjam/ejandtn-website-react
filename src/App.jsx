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
        <Route
          path="/home"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/shop"
          element={
            <Suspense>
              <Shop />
            </Suspense>
          }
        ></Route>
        <Route
          path="/day-tickets"
          element={
            <Suspense>
              <DayTickets />
            </Suspense>
          }
        >
          <Route
            path="/day-tickets/:resultId"
            element={
              <Suspense>
                <Result />
              </Suspense>
            }
          />

          <Route
            path="/day-tickets/archive"
            element={
              <Suspense>
                <Archive />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ContainerDivStyled>
  );
}

export default App;
