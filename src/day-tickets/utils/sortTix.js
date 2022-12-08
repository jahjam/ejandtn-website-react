export const sortTicketsByDateFn = ticketArr => {
  const tickets = ticketArr;
  const sortedObj = {};
  tickets.forEach(e => {
    const k = e.date.slice(3);
    const fk = `01/${k}`;
    sortedObj[fk] = sortedObj[fk] || [];
    sortedObj[fk].push(e);
  });

  Object.values(sortedObj).forEach(group => {
    group.sort(
      (a, b) =>
        new Date(
          b.date.split('/')[2],
          b.date.split('/')[1] - 1,
          b.date.split('/')[0]
        ) -
        new Date(
          a.date.split('/')[2],
          a.date.split('/')[1] - 1,
          a.date.split('/')[0]
        )
    );
  });

  return Object.entries(sortedObj).sort(
    (a, b) =>
      new Date(
        new Date(b[0].split('/')[2], b[0].split('/')[1] - 1, b[0].split('/')[0])
      ) -
      new Date(
        new Date(a[0].split('/')[2], a[0].split('/')[1] - 1, a[0].split('/')[0])
      )
  );
};
