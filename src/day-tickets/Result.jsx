import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { db } from './firebase';
import { onValue, ref } from 'firebase/database';

import styled from 'styled-components';

const Title = styled.h2`
  font-family: inherit;
`;

const Span = styled.span``;

const Body = styled.p`
  line-height: 1.8rem;
`;

const Result = props => {
  const params = useParams();

  const [ticket, setTicket] = useState(null);

  const formatTitle = title => {
    const formattedTitle = title
      .toLowerCase()
      .replace('-', ' ')
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    return formattedTitle;
  };

  useEffect(() => {
    const ticketsRef = ref(db, 'tickets/');

    onValue(ticketsRef, snapshot => {
      snapshot.val().forEach(ticket => {
        if (params.resultId === ticket.title) {
          setTicket(ticket);
        }
      });
    });
  }, [params.resultId]);

  if (props.ticket) {
    return (
      <>
        <Title>{formatTitle(props.ticket.title)}</Title>
        <Span>{props.ticket.date}</Span>
        <Body dangerouslySetInnerHTML={{ __html: props.ticket.body }} />
      </>
    );
  } else if (ticket) {
    return (
      <>
        <Title>{formatTitle(ticket.title)}</Title>
        <Span>{ticket.date}</Span>
        <Body dangerouslySetInnerHTML={{ __html: ticket.body }} />
      </>
    );
  }
};

export default Result;
