import React from "react"
import { Link } from "react-router-dom"

function EditContact()
{
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 my-5 text-center">
                    Edit Contact</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div className="form-group mb-2">
                            <input type="text" placeholder="Name" className="form-control" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="email" placeholder="Email" className="form-control" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="number" placeholder="Phone Number" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update Contact" className="btn btn-dark mr-3" />
                            <Link to="/" className="btn btn-dark">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default EditContact;