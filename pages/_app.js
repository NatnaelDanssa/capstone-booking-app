import { useState } from "react";
import GlobalStyle from "../styles";
import { events as eventList } from "../api/db.js";
import EventForm from "../components/EventForm";

export default function App({ Component, pageProps }) {
  // State to store the list of events
  const [events, setEvents] = useState(eventList);

  // Function to handle form submission
  const handleSubmit = (eventData) => {
    setEvents([...events, eventData]);
  };

  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} events={events} addEvent={addEvent} />
    </>
  );
}
