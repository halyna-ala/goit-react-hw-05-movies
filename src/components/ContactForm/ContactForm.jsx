import { useState } from 'react';
import { Input, InputContainer, ButtonSubmit, Form } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleInputChange = event => {
		const { value } = event.currentTarget;
event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
	};

	const handleSubmit = event => {
		event.preventDefault();

		onSubmit(name, number);
		reset();
	};

	const reset = () => {
		setName('');
		setNumber('');
	}


		return (
			<Form onSubmit={handleSubmit}>
				<InputContainer>
					<label>
						<Input
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							value={name}
							onChange={handleInputChange}
							required
						/>
						Name
					</label>

					<label>
						<Input
							type="tel"
							name="number"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
							value={number}
							onChange={handleInputChange}
							required
						/>
						Phone number
					</label>
				</InputContainer>

				<ButtonSubmit type="submit">ADD CONTACT</ButtonSubmit>
			</Form>
		);
	}



export default ContactForm;