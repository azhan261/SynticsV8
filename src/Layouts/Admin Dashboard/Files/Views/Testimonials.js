import React, { useState, useEffect }   from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getTestimonials, getTestimonial, updateTestimonial } from "../Apis/apiForTestimonials"

function TestimonialsForAdmin() {
    const [items, setItems] = useState([])
    const match = useRouteMatch()
    const statusHandler =  async function(id) {
        const data = await getTestimonial(id)
        data.status = "1"
        await updateTestimonial(data, id)

    }
    useEffect(() => {
            const fetchItems = async function() {
              const testimonials = await getTestimonials()
              setItems(testimonials)
            }
            fetchItems()
          }, []);
    
    return (
        <>
        <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Testimonials</CardHeader>
              <CardBody>
                    <div className="mt-3">
                        <h3>Testimonials List</h3>
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                              <th>Creater Name</th>
                              <th>Title</th>
                              <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(testimonials => (
                                <tr key={testimonials._id}>
                                <td>
                                    {testimonials.name}
                                </td>
                                <td>
                                    {testimonials.testimonialstitle}
                                </td>
                                <td>
                                    <button className="btn btn-outline-info">View Blog</button>
                                </td>
                                {/*<td>
                                <button className="btn btn-outline-success" onClick={() => testingHandler(`${blogs._id}`)}>Approve Blog</button>
                                </td>
                                */}
                                <td>
                                <button className="btn btn-outline-success" onClick={() => statusHandler(`${testimonials._id}`)}>Approve Blog</button>
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
export default TestimonialsForAdmin
