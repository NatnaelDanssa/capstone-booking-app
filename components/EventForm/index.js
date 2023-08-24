import { useRouter } from "next/router";

export default function EventForm({ handleAdd }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newEvent = Object.fromEntries(formData);
    handleAdd(newEvent);
    router.push("/");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="section">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="section">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="section">
          <label htmlFor="type">Type</label>
          <select id="type" name="type" required>
            <option value="Event">Event</option>
            <option value="Panel Discussion">Panel Discussion</option>
            <option value="Party">Party</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>
        <div className="section">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <style jsx>{`
        .container {
          width: 50%;
          margin: 0 auto;
        }
        .section {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        input,
        select,
        textarea {
          width: 100%;
          padding: 0.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 0.25rem;
        }
        .submit-button {
          background-color: #7c0716;
          color: #fff;
          border: none;
          border-radius: 0.25rem;
          padding: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
