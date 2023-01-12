import "./FollowCard.css";
import { UserCard } from "./UserCard";
import { users } from "../data/users";
export function FollowCard() {
  return (
    <div className="card-container">
      <div className="card-container-title-container">
        <span className="card-container-title-container-text">
          Who to follow
        </span>
      </div>
      {users.map((user, index) => {
        return (
          <UserCard
            username={user.username}
            fullname={user.fullname}
            initialFollowing={user.isFollowing}
            key={index}
          />
        );
      })}
    </div>
  );
}
