//create a CourseList React component
//this component will be used in the app.js file
//create a CourseList React component that retrieves a list of courses from our rest service.
//this rest service is at http://35.173.74.63:8080/api/course

import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    //TODO: Uncomment to fetch the list of courses from the REST API

    //useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}/api/course`, { method: 'GET' })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setCourses(data)
    //         });
    // }, []);

    return (
        <Card>
            <Container>
                <h1>Courses</h1>
                <LinkContainer to={`/courses/add`}>
                    <Button variant="primary">Add Course</Button>
                </LinkContainer>
                <Row>
                    {courses.map(course => (
                        <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
                            <Card className="my-3 p-3 rounded">
                                <LinkContainer to={`/course/${course.id}`}>
                                    <Card.Title as="div">
                                        <strong>{course.title}</strong>
                                    </Card.Title>
                                </LinkContainer>
                                <Card.Text as="div">
                                    <div className="my-3">
                                        {course.description}
                                    </div>
                                </Card.Text>
                                <Card.Text as="h3">
                                    {course.estimatedTime}
                                </Card.Text>
                                <LinkContainer to={`/courses/${course.id}`}>
                                    <Button variant="primary">View Course</Button>
                                </LinkContainer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Card>
    )
}

export default CourseList;





