import EventCard from "@/components/EventCard";

export default function EventPage({ id, title, date, type, description }) {
  return (
    <article>
      <EventCard />
    </article>
  );
}
