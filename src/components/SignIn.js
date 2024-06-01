import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

import NavBar from './NavBar';
import Footer from './Footer';

export default function SignIn (props) {

  const auth = getAuth();

  const configObj = {
    signInOptions: [
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,  // require username
      },
      {
        provider: GoogleAuthProvider.PROVIDER_ID
      }
    ],
    signInFlow: 'popup',  // opens the google auth as a pop up (doesnt redirect from page)
    callbacks: {
      signInSuccessWithAuthResult: () => false //don't do anything special on signin
    },
    credentialHelper: 'none'
  }

  return(
    <div>
      <NavBar />
      <div className="m-auto my-5 text-center">
        <h1 className="fs-2">Continue</h1>
        <p>to Sign In or Create an account</p>
        <div className="container card-body">
          <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
        </div>
      </div>
      <Footer />
    </div>
  )

}