import React, {useState} from 'react'
import NavigationBar from './NavigationBar'
import {Form, Button, Spinner} from 'react-bootstrap'
import OrderSuccess from './OrderSuccess'
import {useFormik} from 'formik'
import { orderSchema } from '../schemas'


// Controlled forms to be implemented in separate commit
// Logic of submit that triggers success page needs to be done

const Order = () => {
  const [successfulOrderObject, setSuccessfulOrderObject] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false)

 const onSubmit  = () => {
  // event.preventDefault();
  const formData = 
    {
      name: values.name,
      phoneNumber: values.phoneNumber,
      deliveryAddress: values.deliveryAddress,
      pizza: values.pizzaFlavour,
      quantity: values.quantity,
  }
  console.log(formData)
  fetch("https://pizza-ordering-project-backend.herokuapp.com/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then((successfulOrderObjectResponse) => {
      setSuccessfulOrderObject(successfulOrderObjectResponse)
      setIsSubmitted(true)
    });
}

  const {values, errors, isSubmitting, touched, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      deliveryAddress: "",
      pizzaFlavour: "Hawaiian",
      quantity: "1"
    }, 
    validationSchema: orderSchema,
    onSubmit,
  })

  console.log(errors)

  const renderLoadingSpinner = () => {
    if(isSubmitting) {
      return (
      <>
      <Button variant="secondary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Placing order...
    </Button>
    </> )
    }
    else if (!isSubmitting) {
      return (<Button disabled={isSubmitting} variant="dark" type="submit">
      Submit
    </Button>)
    }
  }
  
  
  const renderContent = () => {
    if (!isSubmitted) {

  return (
    <>
      <h1 className='mt-4 text-center'>Place An Order</h1>
      <div className='form'>
      <Form noValidate className="mx-4" onSubmit={handleSubmit} style={{ width: '500px' }}>
        <div className='instructions'>
          <Form.Text className="text-muted">
            All input fields must be filled in to place order succesfully.
          </Form.Text>
        </div>
        <Form.Group className="mb-3" controlId="validationFormik01">
          <Form.Label>Your Name</Form.Label>
          <Form.Control value={values.name} id="name" onChange={handleChange} isInvalid={!!errors.name} isValid={touched.name && !errors.name} type="text" placeholder="Benard Wanyande" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>

        </Form.Group>
        <Form.Group className="mb-3" controlId="validationFormik01">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control value={values.phoneNumber} id="phoneNumber" onChange={handleChange} isInvalid={!!errors.phoneNumber} isValid={touched.phoneNumber && !errors.phoneNumber} type="text" placeholder="+254712345678" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationFormik01">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control value={values.deliveryAddress} id="deliveryAddress" onChange={handleChange} isInvalid={!!errors.deliveryAddress} isValid={touched.deliveryAddress && !errors.deliveryAddress} type="text" placeholder="Five Star Phase 2, South C, House Number 200" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.deliveryAddress}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationFormik01">
          <Form.Label>Pizza Flavour</Form.Label>
          <select class="form-select" value={values.pizzaFlavour} id="pizzaFlavour" onChange={handleChange} isInvalid={!!errors.pizzaFlavour} isValid={!errors.pizzaFlavour} aria-label="Default select example">
            <option selected value="Hawaiian">Hawaiian</option>
            <option value="Boewors">Boewors</option>
            <option value="Chicken Tikka">Chicken Tikka</option>
            <option value="BBQ Chicken">BBQ Chicken</option>
          </select>
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.pizzaFlavour}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationFormik01">
          <Form.Label>Quantity</Form.Label>
          <select class="form-select" value={values.quantity} id="quantity" onChange={handleChange} isInvalid={!!errors.quantity} isValid={!errors.quantity} aria-label="Default select example">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.quantity}
          </Form.Control.Feedback>
        </Form.Group>
        {renderLoadingSpinner()}
      </Form>
      </div> 
    </>
  )}
  else if (isSubmitted) {
    return <OrderSuccess orderSuccessObject={successfulOrderObject}></OrderSuccess>
  }
}


return (
  <>
    <NavigationBar active="Order"></NavigationBar>
    {renderContent()} 
  </>
)
}


export default Order