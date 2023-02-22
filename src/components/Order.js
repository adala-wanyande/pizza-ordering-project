import React, {useState} from 'react'
import NavigationBar from './NavigationBar'
import {Form, Button} from 'react-bootstrap'
import OrderSuccess from './OrderSuccess'


// Controlled forms to be implemented in separate commit
// Logic of submit that triggers success page needs to be done

const Order = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [pizzaFlavour, setPizzaFlavour] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [successfulOrderObject, setSuccessfulOrderObject] = useState({});


  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value)
  }

  const handlePizzaFlavourChange = (event) => {
    setPizzaFlavour(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = 
      {
        name: name,
        phoneNumber: phoneNumber,
        deliveryAddress: deliveryAddress,
        pizza: pizzaFlavour,
        quantity: quantity,
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

  
  const renderContent = () => {
    if (!isSubmitted) {

  return (
    <>
      <h1 className='mt-4 text-center'>Place An Order</h1>
      <div className='form'>
      <Form className="mx-4" onSubmit={handleSubmit} style={{ width: '500px' }}>
        <div className='instructions'>
          <Form.Text className="text-muted">
            All input fields must be filled in to place order succesfully.
          </Form.Text>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control value={name} onChange={handleNameChange} type="text" placeholder="Benard Wanyande" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control value={phoneNumber} onChange={handlePhoneNumberChange} type="text" placeholder="+254712345678" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control value={deliveryAddress} onChange={handleDeliveryAddressChange} type="text" placeholder="Five Star Phase 2, South C, House Number 200" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Pizza Flavour</Form.Label>
          <select class="form-select" value={pizzaFlavour} onChange={handlePizzaFlavourChange} aria-label="Default select example">
            <option selected value="Hawaiian">Hawaiian</option>
            <option value="Boewors">Boewors</option>
            <option value="Chicken Tikka">Chicken Tikka</option>
            <option value="BBQ Chicken">BBQ Chicken</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <select class="form-select" value={quantity} onChange={handleQuantityChange} aria-label="Default select example">
            <option selected>1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
          </select>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
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