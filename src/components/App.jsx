import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { AppContainer, Container, TitleMain, Title } from './App.styled';
import { useCallback } from 'react';
// import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

 function App () {
	const contactsArr = [
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	];
	const [filter, changeFilter] = useState('');
	
	const [contacts, setContacts] = useState(
		() => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsArr
		);
		
		useEffect(() => {
			window.localStorage.setItem('contacts', JSON.stringify(contacts));
		}, [contacts]);

		
		const addContact = (name, number) => {
			const contact = {
				id: nanoid(),
				name,
				number,
			};
			setContacts(s => [...contacts, contact]);
		};
			
		const isVisibleContacts = useCallback(() => {
			const normalisedFilter = filter.toLowerCase();
			return contacts.filter(contact =>
			  contact.name.toLowerCase().includes(normalisedFilter),
			);
		  }, [filter, contacts]);
		
		  const deleteContact = contactId => {
			setContacts(s => s.filter(contact => contact.id !== contactId));
		  };
		

	// const changeFilter = event => {
	// 	setFilter(event.currentTarget.value);
	// };
	// const isVisibleContacts = () => {
	// 	const normalizeFilter = filter.toLowerCase();

	// 	if (contacts.length !== 0) {
	// 		return contacts.filter(contact =>
	// 			contact.name.toLowerCase().includes(normalizeFilter)
	// 		);
	// 	}
	// };

		return (
			<AppContainer>
				{/* <ToastContainer
				position="top-center"
				autoClose={5000}
				theme="dark"
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/> */}
				<Container>
					<TitleMain>Phonebook</TitleMain>
					<ContactForm onSubmit={addContact} />
				</Container>
				<Container>
					<Title>Contacts</Title>
					<Filter filter={filter} onChange={changeFilter} />
					<ContactList
						ccontacts={isVisibleContacts()}
						onDeleteContact={deleteContact}
					/>
				</Container>
			</AppContainer>
		);
		}
		App.propTypes = {
			contacts: PropTypes.arrayOf(
			  PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				number: PropTypes.string.isRequired,
			  }),
			),
		  };
		  export default App;