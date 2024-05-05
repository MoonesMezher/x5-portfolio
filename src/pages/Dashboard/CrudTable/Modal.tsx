import React, { useState } from "react";
import "./Modal.css";
const Modal = ({ closeModal, onSubmit,defaultValue }) => {
  console.log(defaultValue);
  const [formState, setFormState] = useState(defaultValue == null ? {
    id: "",
    name: "",
    category: "test",
  }: defaultValue);
  const [errors,setError]= useState("");
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (formState.name && formState.id && formState.category) {
      setError("");
      return true;
    } else {
      let errorFields =[];
      for(const [key,value] of Object.entries(formState))
        {
          if(!value)
            {
              errorFields.push(key);
            }
        }
        setError(errorFields.join(", "))
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);
    if (!validateForm())
       return;
    onSubmit(formState);
    closeModal();
  };
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="id">id</label>
            <input name="id" value={formState.page} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">category</label>
            <select
              name="category"
              value={formState.category}
              onChange={handleChange}
            >
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
            </select>
          </div>
          {errors && <div className="error">{`please include :${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
