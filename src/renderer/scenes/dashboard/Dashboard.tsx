import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { QUERY_USERS, QUERY_USER } from '../../resolvers';

export function Dashboard() {
  // const navigate = useNavigate();
  const { data } = useQuery(QUERY_USERS);
  const [getUser, { data: userData }] = useLazyQuery(QUERY_USER);
  console.log({ userData, data });

  return (
    <>
      <h1>Dashboard</h1>
      <Button variant="contained" onClick={() => getUser({ variables: { id: 1 } })}>
        Get User
      </Button>
    </>
  );
}

export default React.memo(Dashboard);
