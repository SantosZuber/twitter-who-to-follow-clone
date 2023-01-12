import "./FollowButton.css";
export function FollowButton({ handleClick, isFollowing }) {
  const text = isFollowing ? "Following" : "Follow";
  return (
    <button className={`Button ${text}Button`} onClick={handleClick}>
      <span className="FollowButton-text-follow">{text}</span>
      <span className="FollowButton-text-unfollow">
      Unfollow
    </span>
    </button>
  );
}
