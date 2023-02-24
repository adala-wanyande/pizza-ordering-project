import * as yup from 'yup'
const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
export const orderSchema = yup.object().shape({
    name: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\s\-\/.]+$/, 'Please enter valid name').required('Please fill in this filled. It is requred.'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Please fill in this field. It is required.'),
    deliveryAddress: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please fill in this field. It is required.'),
    pizzaFlavour: yup.string().required('Please fill in this field. It is required.'),
    quantity: yup.string().required('Please fill in this field. It is required.')
})

export const contactSchema = yup.object().shape({
    name: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\s\-\/.]+$/, 'Please enter valid name').required('Please fill in this filled. It is requred.'),
    email: yup.string().email('Must be a valid email').max(255).required('Please fill in this field. It is required.'),
    subject: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please fill in this field. It is required.'),
    message: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please fill in this field. It is required.')
})