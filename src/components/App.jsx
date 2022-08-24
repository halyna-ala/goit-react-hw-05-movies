import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { AppContainer, Container, TitleMain, Title } from './App.styled';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
	const [contacts, setContacts] = useState(
		() => JSON.parse(window.localStorage.getItem('contacts')) ?? []
	);
	const [filter, setFilter] = useState('');

	const deleteContact = id => {
		setContacts(contacts.filter(contact => contact.id !== id));
	};

	const addContact = (name, number) => {
		const contact = {
			id: nanoid(),
			name,
			number,
		};

		const findContact = contacts.find(contact =>
			contact.name.toLowerCase().includes(name.toLowerCase())
		);

		findContact
			? toast.info(`${name} is already in contact`)
			: setContacts([contact, ...contacts]);
	};

	const changeFilter = event => {
		setFilter(event.currentTarget.value);
	};
	const isVisibleContacts = () => {
		const normalizeFilter = filter.toLowerCase();

		if (contacts.length !== 0) {
			return contacts.filter(contact =>
				contact.name.toLowerCase().includes(normalizeFilter)
			);
		}
		return;
	};
	useEffect(() => {
		const contacts = window.localStorage.getItem('contacts');
		const parsedContacts = JSON.parse(contacts);

		if (parsedContacts) setContacts(parsedContacts);
	}, []);

	useEffect(() => {
		window.localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);



//   componentDidMount() {
// 		const contacts = localStorage.getItem('contacts');
// 		const parsedContacts = JSON.parse(contacts);

// 		if (parsedContacts) this.setState({ contacts: parsedContacts });
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (this.state.contacts !== prevState.contacts) localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
// 	}

	// render() {
	// 	const { contacts, filter } = this.state;

	// 	const normalizeFilter = filter.toLowerCase();

	// 	const visibleContacts = contacts.filter(contact =>
	// 		contact.name.toLowerCase().includes(normalizeFilter)
	// 	);
		return (
			<AppContainer>
				<ToastContainer
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
			/>
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
