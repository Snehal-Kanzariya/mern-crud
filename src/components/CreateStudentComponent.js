import axios from 'axios'
import React, { useState } from 'react'
import StudentForm from './StudentForm'

const CreateStudentComponent = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', rollno: '' })

  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post("http://localhost:4000/students/create-student", studentObject)
      .then(res => {
        if (res.status === 200) {
          alert("Student sucessfully created")
        } else {
          Promise.reject()
        }
      }).catch(err => alert("something went wrong"))
  }

  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      add student
    </StudentForm>
  )
}

export default CreateStudentComponent