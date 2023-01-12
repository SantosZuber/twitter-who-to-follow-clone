import "./FollowCard.css";
import { UserCard } from "./UserCard";
export function FollowCard() {
  return (
    <div className="card-container">
      <span className="card-container-title">Who to follow?</span>
      <UserCard username={"midudev"} fullname={"Miguel Angel Duran"} />
    </div>
  );
}
