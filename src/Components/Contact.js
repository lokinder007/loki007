import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what is whant to say : ${data.msg} `
            )
    }

    return (
        <>
            <div className=" my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="col-md-6 col-10 mx-auto">
                    <form className="row g-3 needs-validation my-5" onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">
                                FullName
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">
                                Phone
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="mobile number"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">
                                Message
                            </label>
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                >                       
                            </textarea>
                        </div>

                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
