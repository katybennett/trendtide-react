import { AvatarRoot } from "@chakra-ui/react";

function UserAvatar({ loggedInUser }) {
  return (
      <AvatarRoot>
        <img
          src={loggedInUser.avatar_url}
          alt={`Avatar of ${loggedInUser.username}`}
        />
      </AvatarRoot>
  );
}

export default UserAvatar;
