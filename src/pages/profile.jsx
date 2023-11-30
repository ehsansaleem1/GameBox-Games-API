import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/navbar' 
import Footer from '../components/footer.jsx'

export default function Profile() {
  const {isAuthenticated, isLoading, user, logout } = useAuth0();

  if (isLoading) {
    return( 
      <div>
        <Navbar />
        <div>Loading ...</div>
        <Footer />
      </div>
    );
  }
  
  return(
    <div className='bg-black m-0'>
      <Navbar />

      {(isAuthenticated) ? 
        <div className='profile-container'>
          <div className='match'>
          <img className='profile-img' src={user.picture} />
          <div className='profile-info'>
            <h1>Name:   {user.name}</h1>
            <h1>User Locale:   {user.locale}</h1>
            <h1>Email:   {user.email}</h1>
          </div>
        </div>
        </div>
        :
        <div className='bg-black'>
          <h1 className='text-center'>You're logged out! Please Log In</h1>
          <button onClick={() => loginWithRedirect()} className='btn-login m-4'>Login</button></div>
      }

      {(isAuthenticated) ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='h m-4'>Logout</button> : <span></span>}

      <Footer />
    </div>
  )
}