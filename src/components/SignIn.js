import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';

export default function SignIn (props) {
  const auth = getAuth();

  const configObj = {
    signInOptions: [
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
      {
        provider: GoogleAuthProvider.PROVIDER_ID
      }
    ],
    signInFlow: 'popup',
    // callbacks: {
    //   signInSuccessWithAuthResult: () => false
    // },
    callbacks: {
      signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none'
  }

  const signOut = props.signoutCallback;

  if (props.currentUser.userId === null) {
    return (
      <div>
        <div className="m-auto my-5 text-center">
          <h1 className="fs-2">Continue</h1>
          <p>to Sign In or Create an account</p>
          <div className="container card-body">
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
          </div>
        </div>
      </div>
    )
  } else {
    signOut();
    return <Navigate to="/index" />
  }
}