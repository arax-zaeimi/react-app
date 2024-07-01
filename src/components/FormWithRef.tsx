import React, { FormEvent, useRef } from "react";

export const FormWithRef = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };

  const handleSubmission = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current) person.name = nameRef.current?.value;
    if (ageRef.current) person.age = parseInt(ageRef.current?.value);

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmission}>
      {/* 
        This trick will create the markups easier for us.
        div.mb-3>label.form-lable+input.form-control 
      */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
