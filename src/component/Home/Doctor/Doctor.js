import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Doctor = ({doctor}) => {
    const {name,img,Id} = doctor

    const history = useHistory()
    const viewDetails = () => {
      history.push(`/details/${Id}`)
    }

    return (
    <Col>
      <Card className="pb-3">
        <Card.Img style={{height:'170px',objectFit:'cover'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{Id}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Button onClick={viewDetails} className="w-50 mx-auto">View Details</Button>
      </Card>
    </Col>
    );
};

export default Doctor;