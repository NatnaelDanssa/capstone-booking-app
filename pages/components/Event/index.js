import styled from "styled-components"

export default function EventForm({title, date, type, description}){
return(

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const title = formData.get("title");
  const date = formData.get("date");
  const type = formData.get("type");
  const description = formData.get("description");

  console.log("Title:", title);
  console.log("Date:", date);
  console.log("Type:", type);
  console.log("Description:", description);
});

<div>
  <form id="eventForm">
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required></input>
    </div>
    <div class="form-group">
      <label for="date">Date:</label>
      <input type="date" id="date" name="date" required></input>
    </div>
    <div class="form-group">
      <label for="type">Type:</label>
      <input type="text" id="type" name="type" required></input>
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <textarea id="description" name="description" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>;

);
}



