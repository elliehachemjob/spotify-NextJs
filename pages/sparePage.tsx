import { connect } from "react-redux";
import { setStatus } from "../redux/actions/user";
import { setLoggedNumbers } from "../redux/actions/auth";

function sparePage(props: any) {
  const { status, setStatus, loggedTimes, setLoggedNumbers } = props;

  console.log(status);
  console.log(loggedTimes);

  return (
    <>
      <p>Enter a Name {status}:</p>
      <p>Logged Times {loggedTimes}:</p>

      <button
        onClick={() => {
          setStatus();
          console.log(status);
        }}
      >
        click to change status
      </button>
      <button
        onClick={() => {
          setLoggedNumbers(5);
          console.log(loggedTimes);
        }}
      >
        click to add logged number
      </button>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return { status: state.user.status, loggedTimes: state.auth.loggedTimes };
};

const mapDispatchToProps = {
  setStatus,
  setLoggedNumbers,
};

export default connect(mapStateToProps, mapDispatchToProps)(sparePage);
