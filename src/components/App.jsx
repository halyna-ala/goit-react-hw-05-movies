import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { AppContainer, Container, TitleMain, Title } from './App.styled';

export class App extends Component {
	state = {
    contacts: [],
		filter: '',
	};

	deleteContact = id => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== id),
		}));
	};

	addContact = (name, number) => {
		const contact = {
			id: nanoid(),
			name,
			number,
		};

		const findContact = this.state.contacts.find(contact =>
			contact.name.toLowerCase().includes(name.toLowerCase())
		);

		findContact
			? alert(`${name} is already in contact`)
			: this.setState(({ contacts }) => ({
					contacts: [contact, ...contacts],
			  }));
	};

	changeFilter = event => {
		const { value } = event.currentTarget;

		this.setState({ filter: value });
	};
  componentDidMount() {
		const contacts = localStorage.getItem('contacts');
		const parsedContacts = JSON.parse(contacts);

		if (parsedContacts) this.setState({ contacts: parsedContacts });
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.contacts !== prevState.contacts) localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
	}

	render() {
		const { contacts, filter } = this.state;

		const normalizeFilter = filter.toLowerCase();

		const visibleContacts = contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizeFilter)
		);
		return (
			<AppContainer>
				<Container>
					<TitleMain>Phonebook</TitleMain>
					<ContactForm onSubmit={this.addContact} />
				</Container>
				<Container>
					<Title>Contacts</Title>
					<Filter filter={filter} onChange={this.changeFilter} />
					<ContactList
						contacts={visibleContacts}
						onDeleteContact={this.deleteContact}
					/>
				</Container>
			</AppContainer>
		);
	}
}