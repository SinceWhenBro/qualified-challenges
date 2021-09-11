import React, { useState } from "react";

function PostCreate({ savePost }) {
  const [type, setType] = useState("Text");
  const [content, setContent] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setType("Text");
    setContent("");
    savePost({ type, content });
  };

  const contentChangeHandler = (event) => setContent(event.target.value);
  const typeChangeHandler = (event) => setType(event.target.value);

  return (
    <form name="create" onSubmit={onSubmitHandler}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            required={true}
            value={type}
            onChange={typeChangeHandler}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea
              id="content"
              name="content"
              required={true}
              rows={3}
              value={content}
              onChange={contentChangeHandler}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              required={true}
              value={content}
              onChange={contentChangeHandler}
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
//   const initialData = {
//     type: "Text",
//     content: "",
//   };

//   const [formData, setFormData] = useState({...initialData})
//   // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

//   // For the tests to pass, the form below must have:
//   // - a `name="create"` attribute
//   // - one child `<button>` with a `type="submit"` attribute
//   // - one child `<select>` with a `name="type"` attribute
//   // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

//   function handleChange(event) {
//     setFormData({...formData, [event.target.name]: event.target.value})
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     savePost(formData.type, formData.content);
//     setFormData({...initialData})
//   }

//   return (
//     <form name="create" onSubmit={handleSubmit}>
//       <fieldset>
//         <legend>Create</legend>
//         <div>
//           <label htmlFor="type">Type: </label>
//           <select 
//           id="type" 
//           name="type" 
//           required={true}
//           onChange={handleChange}
//           value={formData.type}
//           >
//             <option>Text</option>
//             <option>Image</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="content">Content: </label>
//           {formData.type === "Text" ? (
//             <textarea id="content-text" name="content" required={true} rows={3} onChange={handleChange} value={formData.content}/>
//           ) : (
//             <input id="content" name="content" type="url" required={true} onChange={handleChange} value={formData.content}/>
//           )}
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </fieldset>
//     </form>
//   );
// }
export default PostCreate;