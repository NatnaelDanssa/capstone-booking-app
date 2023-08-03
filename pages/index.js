import { v4 as uuidv4 } from "uuid";

import EventCard from "./components/EventCard";
import Flex from "./components/Flex";
import { events } from "./api/db.js";

export default function HomePage() {
  return (
    <Flex $direction="column">
      {events.map((event) => {
        return (
          <EventCard
            key={uuidv4()}
            title={event.title}
            date={event.date}
            type={event.type}
            desc={event.desc}
          />
        );
      })}
    </Flex>
  );
}
