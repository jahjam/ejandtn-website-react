import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Title = styled.span`
  font-size: 1.4rem;
  text-decoration: underline;
  color: #6e94ce;

  cursor: pointer;

  :hover {
    text-decoration: none;
  }
`;

const Ticket = props => {
  const navigate = useNavigate();

  const formatTitle = title => {
    const formattedTitle = title
      .toLowerCase()
      .replace('-', ' ')
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    return formattedTitle;
  };

  const toTicket = () => {
    navigate(`/day-tickets/${props.ticket.title}`);
  };

  return <Title onClick={toTicket}>{formatTitle(props.ticket.title)}</Title>;
};

export default Ticket;
