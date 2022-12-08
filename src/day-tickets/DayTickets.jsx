import { useEffect, useState } from 'react';

import './day-tickets.css';

import styled from 'styled-components';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import { db } from './firebase';
import { onValue, ref } from 'firebase/database';

import Result from './Result';

import { sortTicketsByDateFn } from './utils/sortTix';

const Container = styled.div`
  height: 100%;
  font-family: lores-12, sans-serif;
  position: relative;
  color: #f0f2e6;
  background-color: #090d16;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

const Heading = styled.h1`
  padding-top: 2rem;
  cursor: pointer;
`;

const Header = styled.header`
  height: 6%;
  width: auto;
  background-image: none;

  h1 {
    font-family: lores-9-wide, sans-serif;
    font-size: 3.6rem;

    display: flex;
    align-items: center;
  }

  h1::after {
    content: '';
    width: 0.5rem;
    height: 3.2rem;
    background: #6e94ce;
    display: inline-block;
    animation: cursor-blink 1.5s steps(2) infinite;
  }
`;

const Link = styled.a`
  &,
  &:link,
  &:visited {
    cursor: pointer;
    font-size: 1.2rem;
    text-decoration: underline;
    color: #6e94ce;
  }

  &:hover,
  &:active {
    text-decoration: none;
    color: #f0f2e6;
  }
`;

// const Form = styled.form`
//   display: flex;
//   gap: 1rem;

//   input {
//     height: 3rem;
//     width: 18rem;
//     padding: 1rem;
//     font-family: inherit;
//     background-color: transparent;
//     border: 0.2rem solid #f0f2e6;
//     color: #f0f2e6;
//   }

//   button {
//     height: 3rem;
//     width: 8rem;
//     border: none;
//     cursor: pointer;
//     font-family: inherit;npm r
//     background-color: #f0f2e6;

//     &:hover {
//       background-color: #090d16;
//       border: 0.2rem solid #f0f2e6;
//       color: #f0f2e6;
//     }
//   }
// `;

const DayTickets = () => {
  const [ticketObj, setTicket] = useState(null);
  const [loadArchive, setLoadArchive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = () => {
    navigate('/');
  };

  const refresh = () => {
    navigate('/day-tickets');
  };

  const goToArchive = () => {
    navigate('/day-tickets/archive');
    setLoadArchive(!loadArchive);
  };

  useEffect(() => {
    const ticketsRef = ref(db, 'tickets/');

    return onValue(ticketsRef, snapshot => {
      const tickets = [];
      let sortedTicketsByDateArr;

      if (location.pathname === '/day-tickets') {
        snapshot.forEach(ticket => {
          tickets.push(ticket.val());
          sortedTicketsByDateArr = sortTicketsByDateFn(tickets);
        });

        setTicket(sortedTicketsByDateArr[0][1][0]);
        return;
      }
    });
  }, [location.pathname]);

  return (
    <Container>
      <Header>
        <Heading onClick={refresh}>Day Tickets</Heading>
      </Header>

      <Link onClick={redirect}>Go to EJANDTN website</Link>

      {/* <Form>
        <input />
        <button>Search</button>
      </Form> */}

      <Link onClick={goToArchive}>Past tickets</Link>

      {ticketObj && location.pathname === '/day-tickets' && (
        <Result ticket={ticketObj} />
      )}

      <Outlet />
    </Container>
  );
};

export default DayTickets;
