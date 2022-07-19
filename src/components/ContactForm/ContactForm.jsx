import { Component } from 'react';
import { Input, InputContainer, ButtonSubmit, Form } from './ContactForm.styled';

class ContactForm extends Component {
	state = {
		name: '',
		number: '',
		id: '',
	};

	handleInputChange = event => {
		const { name, value } = event.currentTarget;

		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();

		this.props.onSubmit(this.state.name, this.state.number);
		this.reset();
	};

	reset = () => {
		this.setState({name: '',
		number: '',})
	}

	

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<InputContainer>
					<label>
						<Input
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							value={this.state.name}
							onChange={this.handleInputChange}
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
							value={this.state.number}
							onChange={this.handleInputChange}
							required
						/>
						Phone number
					</label>
				</InputContainer>

				<ButtonSubmit type="submit">ADD CONTACT</ButtonSubmit>
			</Form>
		);
	}
}


export default ContactForm;