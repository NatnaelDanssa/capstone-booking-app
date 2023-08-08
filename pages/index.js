import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

import EventCard from "./components/EventCard";
import Flex from "./components/Flex";

export default function HomePage({ events }) {
  return (
    <>
      <Link href="/create">Event Form</Link>
      <Flex $direction="column">
        {events.map((event) => {
          return (
            <EventCard
              key={uuidv4()}
              title={event.title}
              date={event.date}
              type={event.type}
              description={event.description}
            />
          );
        })}
      </Flex>
    </>
  );
}
