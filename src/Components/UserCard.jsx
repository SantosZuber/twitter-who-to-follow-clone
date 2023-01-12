import "./UserCard.css";
import { Button } from "./Button";
export function UserCard({ username, fullname, isFollowing }) {
  return (
    <div className="userCard-container">
      <div className="userCard-container-userinfo">
        <img
          src={`https://unavatar.io/${username}`}
          className="userCard-container-userinfo-avatar"
        />
        <div className="userCard-container-userinfo-names">
          <span className="userCard-container-userinfo-names-fullname">
            {fullname}
          </span>
          <span className="userCard-container-userinfo-names-username">
            @{username}
          </span>
        </div>
      </div>
      <Button color={"white"} size={"small"}>
        Follow
      </Button>
    </div>
  );
}
