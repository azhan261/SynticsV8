import React from 'react'

function CourseDetailsForAdmin() {
    return (
        <>
        <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Teachers</CardHeader>
              <CardBody>
                    <div className="mt-3">
                        <h3>Teachers List</h3>
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                              <th>Course Name</th>
                              <th>Total Number Of Students Taking Course</th>
                              <th>Sections</th>
                              <th colSpan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(teachers => (
                                <tr key={teachers._id}>
                                <td>
                                    {teachers.name}
                                </td>
                                <td>
                                    {teachers.gender}
                                </td>
                                <td>
                                    {teachers.dob}
                                </td>
                                <td>
                                    {teachers.email}
                                </td>
                                <td>
                                    {teachers.country_code}
                                </td>
                                <td>
                                    {teachers.phone}
                                </td>
                                <td>
                                    {teachers.nationality}
                                </td>
                                <td>
                                    {teachers.country}
                                </td>
                                <td>
                                    {teachers.description}
                                </td>
                                <td>
                                    {teachers.cv}
                                </td>
                                <td>
                                    {teachers.image}
                                </td>
                                <td>
                                    {teachers.video}
                                </td>
                                <td>
                                    <button className="btn btn-outline-info">View Blog</button>
                                </td>
                                {/*<td>
                                <button className="btn btn-outline-success" onClick={() => testingHandler(`${blogs._id}`)}>Approve Blog</button>
                                </td>
                                */}
                                <td>
                                <button className="btn btn-outline-success" onClick={() => statusHandler(`${teachers._id}`)}>Approve Blog</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger" >Delete Blog</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    </div>
    </>
    )
}

export default CourseDetailsForAdmin
