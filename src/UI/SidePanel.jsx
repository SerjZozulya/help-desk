import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { Button, Input } from 'antd'

export default function SidePanel({applicant, executor, created}) {
  console.log(executor)
  return (
    <div className="side-panel">
        <div className="form-row">
          <h3>Applicant: </h3>
          <Link className="applicant">{applicant.name}</Link>
        </div>
        <div className="form-row">
          <h3>Department: </h3>
          <Link className="department">{applicant.department}</Link>
        </div>
        <div className="form-row">
          <h3>Created: </h3>
          <span className="created">
            {dayjs(created).format("DD MMM YYYY - HH:mm")}
          </span>
        </div>
        <div className="horizontal-divider" />
        <h3 className="form-row">Executor:</h3>
        <Input value={executor.name} />
        <Button type="link">Asign me</Button>
      </div>
  )
}
