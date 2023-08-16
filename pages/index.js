import EventCard from "../components/EventCard";
import Flex from "@/components/StyledComponents/Flex";

export default function HomePage({ events }) {
  return (
    <>
      <Flex $direction="column">
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
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
