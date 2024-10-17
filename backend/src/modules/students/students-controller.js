const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.body;
    const students = await getAllStudents(payload);
    res.json({students});

});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.body;
    const response = await addNewStudent(payload);
    res.json(response);

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.body;
    const response = await updateStudent(payload)
    res.json(response);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const {id} = req.params;
    const student = await getStudentDetail(id);
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const payload = req.body;
    const response = await setStudentStatus(payload);
    res.json(response);

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
