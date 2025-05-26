import { getUsers } from "../../api";
import { useEffect, useState } from "react";
import UserCard from "../UserCard";
import Loading from "../Loading";
import { Box, Grid, Text } from "@chakra-ui/react";
import ErrorPage from "./ErrorPage";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      <Text fontSize="xl" fontWeight="bold">
        {/* Users */}
      </Text>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        {users.map((user, i) => (
          <Box key={i}>
            <UserCard user={user} />
          </Box>
        ))}
      </Grid>
    </>
  );
}

export default Users;
