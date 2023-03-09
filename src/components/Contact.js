import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-head">Contact</h1>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Name:</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Brian"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Email address:</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="brian@gmail.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message:</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="submit-button btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
