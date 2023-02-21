import React, {useState} from 'react'
import NavigationBar from './NavigationBar'
import {Form, Button} from 'react-bootstrap'
import ContactSuccess from './ContactSuccess'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [successfulMessageObject, setSuccessfulMessageObject] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageSubjectChange = (event) => {
    setMessageSubject(event.target.value)
  }

  const handleMessageContentChange = (event) => {
    setMessageContent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = 
      {
        name: name,
        email: email,
        subject: messageSubject,
        message: messageContent
    }
    console.log(formData)
    fetch("http://localhost:8000/contact-us-messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((successfulMessageObjectResponse) => {
        setSuccessfulMessageObject(successfulMessageObjectResponse)
        setIsSubmitted(true)
      });
  }

  const renderContent = () => {
    if (!isSubmitted) {
      return (
            <>
              <h1 className='mt-4 text-center'>Send Us A Message</h1>
              <div className='form'>
                <Form className="mx-4" onSubmit={handleSubmit} style={{ width: '500px' }}>
                  <div className='instructions'>
                    <Form.Text className="text-muted">
                      All input fields must be filled to send your message succesfully.
                    </Form.Text>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleNameChange} placeholder="John Doe" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Email Address</Form.Label>
                    <Form.Control type="text" value={email} onChange={handleEmailChange} placeholder="johndoe@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" value={messageSubject} onChange={handleMessageSubjectChange} placeholder="" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <textarea class="form-control" value={messageContent} onChange={handleMessageContentChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                  </Form.Group>
                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </>
      );
    }
    else if (isSubmitted) {
      return <ContactSuccess contactSuccessObject={successfulMessageObject}></ContactSuccess>
    }
  }


  return (
    <>
      <NavigationBar active="Contact"></NavigationBar>
      {renderContent()}
    </>
  )
}

export default Contact