import {Button, Container, Row} from "reactstrap"

export default function Create () {
  return (
    <Container style={{marginTop: "15%", paddingLeft:"10%", paddingRight:"10%"}} className="d-flex flex-column justify-content-center align-items-center">
      <Container className="d-flex justify-content-center h1 pb-3">REGISTER NEW PLAYER</Container>
      <Container style={{maxWidth: "500px"}} className="bg-light border p-5">
        <form>
          <Row className="p-2">
            <input type='email' placeholder="email" name="email" />
          </Row>
          <Row className="p-2">
            <input type='text' placeholder="username" name="username" />
          </Row>
          <Row className="p-2">
            <input type='password' placeholder="password" name="password" />
          </Row>
          <Container className="d-flex justify-content-center pt-4">
            <Button color="warning" type="submit">Submit</Button>
          </Container>
        </form>
      </Container>
    </Container>
  )
}