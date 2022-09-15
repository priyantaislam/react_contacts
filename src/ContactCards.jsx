import './App.css';
import './App.js';
import proPic from './empty_user.png';

const ContactCards = ({ contactList }) => {
  contactList && console.log(contactList);
  //contactList && console.log(contactList);
  return (
    <>
      {contactList?.map((contact, index) => (
          <figure key={index} className="ccard">
          <img 
            alt="user"
            className="proPic" 
            src={proPic}
          />
          <figcaption className="fcaption">
            <p className="username">{contact.name}</p>
            <p className="email">
              <span className="eml">Email:</span> {contact.email}
            </p>
            <p className="phone">
              <span className="eml">Phone:</span> {contact.phone}
            </p>
            <p className="website">
              <span className="eml">Website:</span> {contact.website}
            </p>
          </figcaption>
          </figure>
        ))     
      }
    </>
  )
}

export default ContactCards