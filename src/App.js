import { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook'
import ContactCards from './ContactCards';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/users';
  const {isLoading, data, error} = useFetch(url);
  const [contactList, setContactList] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);

  //checks if there is any query
  //if not returns whole contact list
  useEffect (() => {
    if(filterQuery) {
      const queryString = filterQuery.toLowerCase();
      const filteredData = data.filter(contact => {
        const fullName = `${contact.name}`;
        return fullName.toLowerCase().includes(queryString);
      });

      setContactList(filteredData);

    } else {
      setContactList(data);
    }
    
  }, [data,filterQuery])

  

  return (
    <div className="App">
      <section>
        <form>
          <input 
            placeholder="search contacts"
            onChange={event => setFilterQuery(event.target.value)}
            className="filter" 
          />
        </form>
      </section>
      <section className="conGrid">
        {contactList?.length < 1 && (
          <h1 className="noData">Contact not found!</h1>
        )}
        <ContactCards contactList={contactList}/>
      </section>
      
    </div>
  );
}




export default App;
