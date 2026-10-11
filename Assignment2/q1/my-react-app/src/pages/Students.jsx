
import { Link, Outlet } from 'react-router-dom'

const students = [
  { id: 1, name: 'Ravi' },
  { id: 2, name: 'Priya' },
  { id: 3, name: 'Rahul' }
]

function Students() {
  return (
    <div>
      <h1>Students List</h1>
      {students.map(student => (
        <p key={student.id}>
          <Link to={`/students/${student.id}`}>
            {student.name}
          </Link>
        </p>
      ))}
      <Outlet />
    </div>
  )
}

export default Students
