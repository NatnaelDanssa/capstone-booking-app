import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import { useRouter } from "next/router";
import { events } from "@/api/db.js";

export default function EventPage() {
  const router = useRouter();
  const eventsId = router.query.eventsId;
  return (
    <article>
      <a href={`/events/${id}`}>
        <EventCard />
      </a>
    </article>
  );
}
