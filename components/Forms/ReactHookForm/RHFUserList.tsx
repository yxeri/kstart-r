import { IFormValues } from "./RHFinterface";
import styles from "./css/RHF.module.css";

type User = {
  user: IFormValues;
};
function Users({ user }: User) {
  return (
    <div className={styles.UserInfo}
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   border: "1px solid silver",
      //   padding: "1.9rem",
      //   marginTop: "2rem",
      //   boxShadow: "1px 2px 4px black",
      //   textAlign: "left",
      //   justifyContent: "center",
      //   marginLeft: "2rem",
      //   marginBottom: "2rem",
      // }}
    >
      <div>
        <p style={{ color: "black" }}>
          <strong style={{ color: "navy" }}>Firstname: </strong>{" "}
          {user.firstName}
        </p>
        <p style={{ color: "black" }}>
          <strong style={{ color: "navy" }}>Lastname: </strong> {user.lastName}
        </p>
        <p style={{ color: "black" }}>
          <strong style={{ color: "navy" }}>Email: </strong> {user.email}
        </p>
        <p style={{ color: "black" }}>
          <strong style={{ color: "navy" }}>Password: </strong> {user.password}
        </p>
        <p style={{ color: "black" }}>
          <strong style={{ color: "navy" }}>Confirm password: </strong>
          {user.confirmPassword}
        </p>
      </div>
    </div>
  );
}
export default Users;
