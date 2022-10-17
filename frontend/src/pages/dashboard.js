import {Button, Col, Container, Row} from "reactstrap"

export default function Dashboard () {
  return (
    <Container style={{marginTop: "5%", paddingLeft:"5%", paddingRight:"5%"}} className="d-flex flex-column justify-content-center align-items-center">
      <Container className="d-flex justify-content-center h1 pb-3">DASHBOARD</Container>
      <Container className="bg-light border p-5">
        <form>
          <Row className="pt-2">
            <Col className="pt-2">
              <input type='email' placeholder="email" name="email" />
            </Col>
            <Col className="pt-2">
              <input type='text' placeholder="username" name="username" />
            </Col>
            <Col className="pt-2">
              <input type='text' placeholder="experience" name="experience" />
            </Col>
            <Col className="pt-2">
              <input type='text' placeholder="lvl" name="lvl" />
            </Col>
          </Row>
          <Container className="d-flex justify-content-center pt-4">
            <Button color="warning" type="submit">Find</Button>
          </Container>
        </form>
        <Container>
        </Container>
      </Container>
      <Container className="bg-light border p-5 mt-4 h3" >
         PLAYER LIST
         <Container style={{height: "500px"}}>

         </Container>
      </Container>
    </Container>
  )
}