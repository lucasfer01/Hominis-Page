import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import moduleStyle from "./ContactForm.module.css";
import { onSubmit } from "./utils";



export const ContactForm = () => {
  return (
    <div className={moduleStyle.contactForm}>
      <Title>Contactanos</Title>

      <Formik
        initialValues={{
          name: "",
          lastname: "",
          phone: "",
          email: "",
          plan: "",
          message: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "El campo debe tener un minimo de 3 caracteres")
            .max(65, "El campo no puede contener mas de 65 caracteres")
            .required("Este campo es obligatorio"),
          lastname: Yup.string()
            .min(3, "El campo debe tener un minimo de 3 caracteres")
            .max(65, "El campo no puede contener mas de 65 caracteres")
            .required("Este campo es obligatorio"),
          phone: Yup.string()
            .matches(/^\d+$/, "El campo solo debe contener números")
            .min(8, "El campo de contener al menos 8 caracteres")
            .max(40, "El campo no puede tener mas de 40 caracteres")
            .required("Este es campo es obligatorio"),
          email: Yup.string()
            .email("Debe ser un email valido")
            .required("El campo es obligatorio")
            .max(70, "El campo no puede tener mas de 50 caracteres"),
          plan: Yup.string().required("El campo es obligatorio"),
          message: Yup.string(),
        })}
      >
        {(formik) => (
          <Form className={moduleStyle.contactForm__form}>
            {/* Name input */}
            <div className={moduleStyle.contactForm__form__input}>
              <Field name="name" type="text" placeholder="Nombre *"/>
              <ErrorMessage name="name" component="span" />
            </div>

            {/* Lastname input */}
            <div className={moduleStyle.contactForm__form__input}>
              <Field name="lastname" type="text" placeholder="Apellido *"/>
              <ErrorMessage name="lastname" component="span" />
            </div>

            {/* Phone input */}
            <div className={moduleStyle.contactForm__form__input}>
              <Field name="phone" type="text" placeholder="Celular *"/>
              <ErrorMessage name="phone" component="span" />
            </div>

            {/* Email input */}
            <div className={moduleStyle.contactForm__form__input}>
              <Field name="email" type="text" placeholder="Email *"/>
              <ErrorMessage name="email" component="span" />
            </div>

            {/* Plan input */}
            <div className={moduleStyle.contactForm__form__input}>
              <Field name="plan" as="select">
                <option value="">Selecione un plan *</option>
                <option value="SG 01">SG 01</option>
                <option value="SG 02">SG 02</option>
                <option value="H 3.0">H 3.0</option>
              </Field>
              <ErrorMessage name="plan" component="span" />
            </div>

            {/* Message input */}
            <div className={moduleStyle.contactForm__form__input}>
              <Field name="message" as="textarea" placeholder="Mensaje"/>
              <ErrorMessage name="message" component="span" />
            </div>

            <Button style={{width: '20%', marginTop: '1.5rem'}} bgColor="var(--violet)">Enviar</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
