const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };
  ["useContext", "UserContext", "react"]
  export default UserProfile;