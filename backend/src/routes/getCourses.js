import { courseData } from "../courseData";

export const getCoursesRoute = {
    path: '/api/course',
    method: 'get',
    handler: (req, res) => {
        //TODO: Uncomment get the courses from json file
        //res.status(200).send(courseData);
    },
};