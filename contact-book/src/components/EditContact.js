import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom"
import { toast } from "react-toastify";

function EditContact() {
    const { id } = useParams();
    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => parseInt(contact.id) === parseInt(id));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact]);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number) && number);

        if (!name || !email || !number) {
            return toast.warning("Please fill in all fields")
        }

        if (checkEmail) {
            return toast.error("This email already exists")
        }

        if (checkNumber) {
            return toast.error("This number already exists");
        }
        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }

        dispatch({ type: "UPDATE_CONTACT", payload: data });
        toast.success("Contact updated successfully.");
        history.push("/");
    };

    return (
        <div className="container">
            {currentContact ? (
                <div className="row">
                    <h1 className="display-3 my-5 text-center">Edit Contact {id}</h1>
                    <div className="col-md-6 shadow mx-auto p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group mb-2">
                                <input type="number" placeholder="Phone Number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Update Contact" className="btn btn-dark" />
                                <Link to="/" className="btn btn-danger m-2">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <h1 className="display-3 my-5 text-center">Contact with id {id} is not exist</h1>
            )}
        </div>
    )

}

export default EditContact;