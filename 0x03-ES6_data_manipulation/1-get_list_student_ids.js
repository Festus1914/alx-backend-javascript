// 1-get_list_student_ids.js

function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map(student => student.id);
}

export default getListStudentIds;
