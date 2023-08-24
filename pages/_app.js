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
    console.log("new event", newEvent);
    setEvents([...events, { ...newEvent, id: uuidv4() }]);
    console.log([...events, { ...newEvent, id: uuidv4() }]);
  }

  function handleUpdate(updatedEvent) {
    const updatedEvents = events.filter(
      (event) => event.id !== updatedEvent.id
    );

    setEvents([updatedEvent, ...updatedEvents]);
  }
  function handleDeleteEvent(deletedEventId) {
    const newEventList = events.filter((event) => event.id !== deletedEventId);
    setEvents(newEventList);
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
        handleDeleteEvent={handleDeleteEvent}
      />
    </>
  );
}
