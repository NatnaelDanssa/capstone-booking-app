import Link from "next/link";

import EventCard from "../components/EventCard";
import Flex from "@/components/StyledComponents/Flex";

export default function HomePage({ events }) {
  return (
    <>
      <Link href="/create">Event Form</Link>
      <Flex $direction="column">
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
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
