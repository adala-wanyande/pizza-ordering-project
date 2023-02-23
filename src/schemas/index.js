import * as yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const orderSchema = yup.object().shape({
    name: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\s\-\/.]+$/, 'Please enter valid name').required('Please fill in this filled. It is requred.'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Please fill in this field. It is required.'),
    deliveryAddress: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please fill in this field. It is required.'),
    pizzaFlavour: yup.string().required('Please fill in this field. It is required.'),
    quantity: yup.string().required('Please fill in this field. It is required.')
})