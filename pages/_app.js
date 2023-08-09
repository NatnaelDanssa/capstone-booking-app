import { useState } from "react";
import GlobalStyle from "../styles";
import { events as eventList } from "../api/db.js";

export default function App({ Component, pageProps }) {
  // State to store the list of events
  const [events, setEvents] = useState(eventList);

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
