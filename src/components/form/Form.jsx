import React from "react"
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { colors } from '../../utils/utils';

const Formbody = styled.div`
    padding: 10% 10% 20% 10%;
    background-color: ${colors.main};
    color: ${colors.fontblack};

    & p{
        margin: 2% 0 5% 0;
    }
    & form{
        display: flex;
        flex-flow: column;

        label, button{
            margin-top: 3%;
        }
        label{
            p, input[type=text], textarea{
                width: 100%;
            }
        }
        button{
            background-color: ${colors.darker};
            color: ${colors.light};
            border-radius: 15px;
            border: none;
            height: 10vh;
            margin-bottom: 8%;
        }
        input[type=text]{
            min-height: 5vh;
        }
        textarea{
            min-height: 10vh;
        }
        input[type=text], textarea, button{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border: none;
        }
        input[type=checkbox]{
            width: 24px;
            height: 24px;
            margin-right: 8px;
            display: inline-block;
        }
        a{
            color: ${colors.fontblack};
        }
    }
    @media (min-width: 768px){
        padding: 10% 30%;
    }
`


const ContactForm = () => {
    return (
        <Formbody>
            <h1>KONTAKT</h1>
            <p>Wiecie już Państwo czym nasza Kancelaria się zajmuje. Jeśli mają Państwo sprawę, w której możemy Wam pomóc, zapraszamy na spotkanie w siedzibie Kancelarii. Jeśli nie ma możliwości osobistego spotkania, prosimy o kontakt mailowy, telefoniczny lub za pomocą formularza kontaktowego.</p>
            <p>Zapraszamy do współpracy.</p>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
                validate={values => {
                    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Proszę wypełnić pole.'
                    }
                    if (!values.email || !emailRegex.test(values.email)) {
                        errors.email = 'Błędny email.'
                    }
                    if (!values.message) {
                        errors.message = 'Pole wymagane.'
                    }
                    return errors;
                }}
            >
                {() => (
                    <Form>
                        <label htmlFor="name">
                            <p>Imię i nazwisko:</p>
                            <Field name="name" type="text"/>
                        </label>
                        <ErrorMessage name="name" />

                        <label htmlFor="brand">
                            <p>Firma:</p>
                            <Field name="brand" type="text"/>
                        </label>

                        <label htmlFor="email">
                            <p>Adres email:</p>
                            <Field name="email" type="text"/>
                        </label>
                        <ErrorMessage name="email" />

                        <label htmlFor="telephone">
                            <p>Nr. telefonu:</p>
                            <Field name="telephone" type="text"/>
                        </label>

                        <label htmlFor="message">
                            <p>Wiadomość:</p>
                            <Field name="message" component="textarea" />
                        </label>
                        <ErrorMessage name="message" />

                        <button type="submit">Wyślij</button>

                        <label htmlFor="statute">
                            <Field name="statute" type="checkbox" />
                            <span><a href="/">Akceptuję regulamin</a></span>
                        </label>

                        <label htmlFor="rodo">
                            <Field name="rodo" type="checkbox" />
                            <span>Wyrażam zgodę na przetwarzanie moich danych osobowych przez Kancelarię Adwokacką Karolina Malec-Pawlak. z siedzibą w Środzie Śląskiej w celu otrzymania odpowiedzi na zapytanie, a także na otrzymywanie za pośrednictwem poczty elektronicznej oraz telefonicznie informacji powiązanych z przedmiotem mojego zapytania. Wyrażenie zgody na przetwarzanie danych osobowych jest dobrowolne, jednak niezbędne w celu uzyskania odpowiedzi na wysłane zapytanie.</span>
                        </label>
                    </Form>
                )}
            </Formik>
        </Formbody>
    )
};
export default ContactForm;