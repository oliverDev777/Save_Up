import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import ProfileTabs from '../../Components/ProfileTabs';
import Footer from '../../Components/Footer';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <ProfileTabs />
        <Footer />
      </div>
    );
  }
}

export default Profile;