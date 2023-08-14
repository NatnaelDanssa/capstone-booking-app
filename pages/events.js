import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import { useRouter } from "next/router";

export default function EventPage({ id, title, date, type, description }) {
  const router = useRouter();
  // const eventsId = router.query.eventsId;
  return (
    <article>
      <EventCard />
    </article>
  );
}
