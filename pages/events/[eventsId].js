import { styled } from "styled-components";
import { useRouter } from "next/router";
import { events } from "@/api/db";

export default function EventsDetail() {
  const router = useRouter();
  const eventsId = router.query.eventsId;

  const specialEvent = events.find((event) => event.id == eventsId);
  if (!specialEvent) {
    return null;
  }
  const handleEditClick = () => {
    // Navigate to the edit page for the current event
    router.push(`/edit-event/${eventsId}`);
  };

  return (
    <article>
      <TitleContainer>{specialEvent?.title}</TitleContainer>
      <DateContainer>{specialEvent?.date}</DateContainer>
      <TypeContainer>{specialEvent?.type}</TypeContainer>`
      <DescriptionContainer>{specialEvent?.description}</DescriptionContainer>
      <EditButton onClick={handleEditClick}>EDIT EVENT</EditButton>
    </article>
  );
}
const TitleContainer = styled.h2`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #95091b;
  line-height: 1.4;
  margin-top: 0;
`;
const DateContainer = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #95091b;
  line-height: 1.4;
  margin-top: 0;
`;
const TypeContainer = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #95091b;
  line-height: 1.4;
  margin-top: 0;
`;
const DescriptionContainer = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #95091b;
  line-height: 1.4;
  margin-top: 0;
`;
const EditButton = styled.button`
  padding-left: 20px;
  background-color: #95091b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;
