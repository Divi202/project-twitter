import "../Style/signup.css";
import Button from "./Button";
function SignUp() {
  const btnTitle = {
    Google: { Icon: "IconG", Text: "Sign up with Google" }, // Add icon
    Apple: { Icon: "IconA", Text: "Sign up with Apple" }, // Add icon
    CreateAcc: "Create account",
    SignIn: "Sign in",
  };
  return (
    <>
      <div className="main">
        <div className="signup-logo">Logo</div>
        <div className="signup-box">
          <div className="text">
            <p className="main-heading">Happening now</p>
            <p className="join-now">Join today .</p>
          </div>
          <div className="signup-other">
            <Button title={btnTitle.Google}></Button>
            <Button title={btnTitle.Apple}></Button>
            <p>or</p>
            <Button title={btnTitle.CreateAcc}></Button>
            <p>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            <p>Already have an account</p>
            <Button title={btnTitle.SignIn}></Button>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default SignUp;
