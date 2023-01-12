import "./UserCard.css";
import { FollowButton } from "./FollowButton";
import { useState } from "react";

export function UserCard({ username, fullname, initialFollowing }) {
  const FollowButtonManager = () => {
    const [isFollowing, setIsFollowing] = useState(initialFollowing);
    function handleClick() {
      setIsFollowing(!isFollowing);
    }
    return <FollowButton handleClick={handleClick} isFollowing={isFollowing} />;
  };
  return (
    <div className="userCard-container">
      <div className="userCard">
        <div className="userCard-userinfo">
          <img
            src={`https://unavatar.io/${username}`}
            className="userCard-userinfo-avatar"
          />
          <div className="userCard-userinfo-names">
            <span className="userCard-userinfo-names-fullname">{fullname}</span>
            <span className="userCard-userinfo-names-username">
              @{username}
            </span>
          </div>
        </div>
        <FollowButtonManager />
      </div>
    </div>
  );
}
