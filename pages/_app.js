import { useState } from "react";
import GlobalStyle from "../styles";
import { events as eventList } from "../api/db.js";
import { v4 as uuidv4 } from "uuid";
import Navigation from "@/components/navigation";
import { MainContent } from "@/components/maincontent";

export default function App({ Component, pageProps }) {
  // State to store the list of events
  const [events, setEvents] = useState(eventList);

  function addEvent(newEvent) {
    setEvents([...events, { ...newEvent, id: uuidv4() }]);
  }

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <MainContent />
      <Component {...pageProps} events={events} addEvent={addEvent} />
    </>
  );
}
