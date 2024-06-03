import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';



export default function SignIn (props) {
  const currUser = props.currentUser;
  const signOut = props.signOut;
  console.log(currUser);

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
    callbacks: {
      signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none'
  }

  if (currUser.userId === null) {  // user not signed in
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
  } else {  // user signed in
    signOut();
    return <Navigate to=".." />
  }
}