import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';

const ContainerDivStyled = styled.div`
  margin: 0 auto;
  height: 100%;
`;

const Home = React.lazy(() => import('./home/Home'));
const Shop = React.lazy(() => import('./shop/Shop'));

function App() {
  return (
    <ContainerDivStyled>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/shop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Shop />
            </Suspense>
          }
        ></Route>
      </Routes>
    </ContainerDivStyled>
  );
}

export default App;
