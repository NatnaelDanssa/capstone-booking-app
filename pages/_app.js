import { useState } from "react";
import GlobalStyle from "../styles";
import { events as eventList } from "../api/db.js";
import { v4 as uuidv4 } from "uuid";
import Navigation from "../components/Navigation";
import ContentMain from "../components/ContentMain";

export default function App({ Component, pageProps }) {
  // State to store the list of events
  const [events, setEvents] = useState(eventList);

  function handleAdd(newEvent) {
    setEvents([...events, { ...newEvent, id: uuidv4() }]);
  }

  function handleUpdate(updatedEvent) {
    const updatedEvents = events.filter(
      (event) => event.id !== updatedEvent.id
    );

    setEvents([updatedEvent, ...updatedEvents]);
  }

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <ContentMain />
      <Component
        {...pageProps}
        events={events}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
      />
    </>
  );
}
