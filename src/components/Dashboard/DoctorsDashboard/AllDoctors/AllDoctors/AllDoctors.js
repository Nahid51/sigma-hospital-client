import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useGetDoctorsQuery } from '../../../../../features/sigmaApi';
import SingleCardDoctor from '../SingleCardDoctor/SingleCardDoctor';
import './AllDoctors.css';

const AllDoctors = () => {
    const doctorsCollection = useGetDoctorsQuery() || {};
    return (
        <div style={{ backgroundColor: "#F4F7F6" }}>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {doctorsCollection?.data?.map((doc) => (
                        <SingleCardDoctor
                            key={doc._id}
                            doc={doc}
                        ></SingleCardDoctor>
                    ))}
                    <Card className='text-center card-control2'>
                        <Card.Body className='row'>
                            <div className='my-auto'>
                                <Card.Text className='text-secondary'><b>Add New Docter</b></Card.Text>
                                <NavLink to="/addDoctors">
                                    <Card.Text className='adddoctor-icon'><i class="fas fa-plus-circle"></i></Card.Text>
                                </NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default AllDoctors;