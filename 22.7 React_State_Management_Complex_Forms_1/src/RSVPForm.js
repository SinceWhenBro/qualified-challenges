import React, { useState } from "react";

function RSVPForm() {
    const initialFormState = {
        name: "",
        age: "",
        member: false,
        comment: "",
      };

    const [formData, setFormData] = useState({...initialFormState});
    
    const handleChange = ({ target }) => {
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormData({
          ...formData,
          [target.name]: value,
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.name, formData.age, formData.member, formData.comment);
        setFormData({...initialFormState});
   }
  return(
   <form onSubmit={handleSubmit}>
       
       <label htmlFor="name">
           Enter Your Name:
           <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
           />
       </label>
       <br />
   
      <label htmlFor="age">How old are you:</label>
      <select name="age" id="age" onChange={handleChange} value={formData.age}>
        <option value="0-19">0-19</option>
        <option value="20-39">20-39</option>
        <option value="40-59">40-59</option>
        <option value="60+">60+</option>
        <option value="prefer not say">Prefer not to say</option>
      </select>
      <br />
     
        <label htmlFor="member">
        New Member?
        <input
            id="member"
            type="checkbox"
            name="member"
            onChange={handleChange}
            checked={formData.member}
            value="member"
        />
        </label>
        <br />
        <label htmlFor="comment">
           Comments
           <input
            id="comment"
            type="text"
            name="comment"
            onChange={handleChange}
            value={formData.comment}
           />
       </label>
      <button type="submit">Submit</button>
   </form>
    )
}

export default RSVPForm;
