import { useState } from 'react';

function ProfileCard() {
  const [showContact, setShowContact] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [profilePic, setProfilePic] = useState('pic1');
  const [email, setEmail] = useState('username@holder.com')
 const [phoneNo, setNumber] = useState('123-456-7890');

function cContact(){ setShowContact(!showContact) }
function cFollowing(){ setIsFollowing(!isFollowing) }
function cView(){ setViewCount(viewCount + 1) }
function cEmail(value){ setEmail(value) }
function cNumber(value){ setNumber(value) }
function cPic(){ setProfilePic( profilePic == 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWZHKNjttUATBmx8x5tEg8q79yk_L8wqJVDhjOFv9XvzMeY4:https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg&s' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRHfINhnWPgz0edfqe5CxFsbwhpoIgo99GzRtK-vcgER5IQU:https://images.pexels.com/photos/19790154/pexels-photo-19790154.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-mo-eid-1268975-19790154.jpg%26fm%3Djpg&s' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWZHKNjttUATBmx8x5tEg8q79yk_L8wqJVDhjOFv9XvzMeY4:https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg&s') } {/* pic1 and pic2 are supposed to be 2 different links for 2 different images */}
  
	function contactInfo(){
	if (showContact){
	return (<> Email: {email} <br/> Phone Number: {phoneNo} </>)
}
else{
return ''
}
}
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', maxWidth: '300px' }}>
      <img src={profilePic} alt='Profile Picture' style={{border:'2px solid black'}}/> <h2>Alex Johnson</h2> <button onClick={cPic}> Change Profile Picture </button>

	<p> {contactInfo()} </p> <button onClick={cContact}> See Contact Info </button> 
    <button onClick={cFollowing} style={{backgroundColor: isFollowing ? 'grey' : 'blue'}}> {isFollowing ? 'Following' : 'Follow'} </button>
<p> View Count: {viewCount} </p> 
    </div>
  );
}

 export default ProfileCard;
