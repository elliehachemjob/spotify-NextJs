import { connect } from "react-redux";
import { setStatus } from "../redux/actions/user";

function sparePage(props: any) {
  const { status, setStatus } = props;
  console.log(status);

  return (
    <>
      <p>Enter a Name {status}:</p>
      <button
        onClick={() => {
          setStatus();
          console.log(status);
        }}
      >
        click
      </button>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return { status: state.user.status };
};

const mapDispatchToProps = {
  setStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(sparePage);
