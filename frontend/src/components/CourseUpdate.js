import React, { useState, useEffect } from 'react';
import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const CourseUpdate = () => {
    const navigate = useNavigate();
    const [course, setCourse] = useState({});
    const { id } = useParams();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourse({ ...course, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: Uncomment to update the course in the REST API
        //TODO: Update the method to PUT
        // fetch(`${process.env.REACT_APP_API_URL}/api/course/${id}`, {
        //     method: 'REPLACE WITH CORRECT METHOD',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(course),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         navigate(-1);
        //     }
        //    );
    }

    //TODO:  Uncomment to fetch the course details from the REST API
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}/api/course/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setCourse(data)
    //         });
    // }
    //     , [id]);

    return (
        <Card>
            <Container>
                <h1>Modify Course</h1>
                <Row>
                    <Col>
                        <Card className="my-3 p-3 rounded">
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Course Title"
                                        name="title"
                                        value={course.title}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formformDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Course Description"
                                        name="description"
                                        value={course.description}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formEstimatedTime">
                                    <Form.Label>Estimated Time</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Course Time Estimate"
                                        name="estimatedTime"
                                        value={course.estimatedTime}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                            </Form>



                        </Card>
                        <Button onClick={handleSubmit} variant="primary">Save</Button>
                        &nbsp;
                        <Button onClick={() => navigate(-1)} variant="primary">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default CourseUpdate;
