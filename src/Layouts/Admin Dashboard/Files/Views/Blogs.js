import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import React, { useState, useEffect }  from 'react'
import { getBlogs, getBlog, updateBlog } from "../Apis/apiForBlogs"

function BlogsForAdmin() {

    const [items, setItems] = useState([])

    const statusHandler =  async function(id) {
        const data = await getBlog(id)
        data.status = "1"
        await updateBlog(data, id)

    }
    useEffect(() => {
            const fetchItems = async function() {
              const blogs = await getBlogs()
              setItems(blogs)
            }
            fetchItems()
          }, []);
    
    return (
        <>
        <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Blogs</CardHeader>
              <CardBody>
                    <div className="mt-3">
                        <h3>Blogs List</h3>
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
                            items.map(blogs => (
                                <tr key={blogs._id}>
                                <td>
                                    {blogs.name}
                                </td>
                                <td>
                                    {blogs.blogstitle}
                                </td>
                                <td>
                                    <button className="btn btn-outline-info">View Blog</button>
                                </td>
                                {/*<td>
                                <button className="btn btn-outline-success" onClick={() => testingHandler(`${blogs._id}`)}>Approve Blog</button>
                                </td>
                                */}
                                <td>
                                <button className="btn btn-outline-success" onClick={() => statusHandler(`${blogs._id}`)}>Approve Blog</button>
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

export default BlogsForAdmin
