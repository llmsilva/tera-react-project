import React from "react";
import { useParams } from "react-router-dom";

import UserBio from "../molecules/UserBio";
import PostListWrapper from "../molecules/PostListWrapper";

import Default from "../templates/Default";

export default function UserBlog() {
  const { userId } = useParams();

  const [posts, setPosts] = React.useState([]);
  const [user, setUser] = React.useState({});

  console.log("user", user);

  React.useEffect(() => {
    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setUser(data[0].userData);
      });
  }, [userId]);

  return (
    <Default>
      <div className="user-blog">
        <UserBio user={user} />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
