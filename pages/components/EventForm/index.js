import styled from "styled-components";

export default function EventForm({
  title,
  date,
  type,
  description,
  addEvent,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newEvent = Object.fromEntries(formData);
    addEvent(newEvent);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required></input>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required></input>
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" name="type" required></input>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
