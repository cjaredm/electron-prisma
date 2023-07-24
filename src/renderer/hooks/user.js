// import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../resolvers';

export function useMe() {
  const { data, error } = useQuery(QUERY_ME);

  switch (true) {
    case error:
    case !data?.me:
      return null;
    case !data:
      return 'loading';
    default:
      return data.me;
  }

  // const [me, setMe] = React.useState(null);

  // const fetchMe = async () => {
  //   const resp = await sendGraphQLRequest({ query: QUERY_ME });
  //   console.log('resp', resp);
  //   return resp.data.me;
  // };
  //
  // React.useEffect(() => {
  //   fetchMe().then(setMe);
  // }, [refetch]);
  // return me;
}

// TODO: Setup Sign out on the backend to wipe out session
// export function useSignOut() {
//   const [signOut] = useMutation(MUTATION_SIGN_OUT, {
//     refetchQueries: [QUERY_ME]
//   });
//   return signOut;
// }
