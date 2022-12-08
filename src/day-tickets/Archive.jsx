import { useEffect, useState } from 'react';

import { format } from 'date-fns';

import { db } from './firebase';
import { onValue, ref } from 'firebase/database';

import { sortTicketsByDateFn } from './utils/sortTix';
import Ticket from './Ticket';

import styled from 'styled-components';

const ArchiveContainer = styled.div`
  white-space: nowrap;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

const TitleBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const TitleBlockDate = styled.span`
  font-weight: 600;
  font-size: 2rem;
  align-self: flex-start;
  color: #f0f2e6;
`;

const Archive = () => {
  const [sortedTickets, setSortedTickets] = useState([]);

  useEffect(() => {
    const ticketsRef = ref(db, 'tickets/');
    const tickets = [];

    let sortedTicketsByDateArr;

    onValue(ticketsRef, snapshot => {
      snapshot.forEach(ticket => {
        tickets.push(ticket.val()); // turn into array
        sortedTicketsByDateArr = sortTicketsByDateFn(tickets);
        setSortedTickets(sortedTicketsByDateArr);
      });
    });
  }, []);

  return (
    <ArchiveContainer>
      {sortedTickets &&
        sortedTickets.map(group => {
          return (
            <TitleBlock key={group} data-date={group[0]}>
              <TitleBlockDate>
                {format(
                  new Date(
                    group[0].split('/')[2],
                    group[0].split('/')[1] - 1,
                    group[0].split('/')[0]
                  ),
                  'MMM-yyyy'
                ).replace('-', ' ')}
              </TitleBlockDate>

              {group[1].map(ticket => {
                return <Ticket key={ticket.title} ticket={ticket} />;
              })}
            </TitleBlock>
          );
        })}
    </ArchiveContainer>
  );
};

export default Archive;
