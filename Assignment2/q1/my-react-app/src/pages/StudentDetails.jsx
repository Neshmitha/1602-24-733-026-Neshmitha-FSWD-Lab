
import { useParams } from 'react-router-dom'

const students = {
  1: { name: 'Ravi', age: 20, course: 'CSE' },
  2: { name: 'Priya', age: 21, course: 'CSE' },
  3: { name: 'Rahul', age: 20, course: 'IT' }
}

function StudentDetails() {
  const { id } = useParams()
  const student = students[id]

  if (!student) {
    return <h2>Student Not Found</h2>
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  )
}

export default StudentDetails
