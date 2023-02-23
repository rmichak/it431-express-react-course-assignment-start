import { courseData } from "../courseData";

export const getCourseRoute = {
    path: '/api/course/:id',
    method: 'get',
    handler: (req, res) => {
        //TODO: Uncomment to get a course from the json file

        // const id = req.params.id;
        // const course = courseData.find((course) => course.id === parseInt(id));
        // res.status(200).send(course);
    },
};