import { styled } from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function EventsDetail({
  handleUpdate,
  handleDeleteEvent,
  events,
}) {
  const [editMode, setEditMode] = useState(false);
  const [eventObject, setEventObject] = useState(null);

  const router = useRouter();
  const eventsId = router.query.eventsId;

  const eventToEdit = events.find((event) => event.id == eventsId);

  useEffect(() => {
    setEventObject(eventToEdit);
  }, [eventToEdit]);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventObject((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setEditMode(false);
    handleUpdate(eventObject);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmDelete) {
      handleDeleteEvent(eventsId);
      router.push("/");
    }
  };

  const handleArtistClick = () => {
    router.push(`/artist/${eventObject.artistId}`);
  };

  if (!eventToEdit) {
    return;
  }

  return (
    <article>
      <TitleContainer>
        {editMode ? (
          <input
            type="text"
            name="title"
            value={eventObject?.title || ""}
            onChange={handleInputChange}
          />
        ) : (
          eventObject?.title || ""
        )}
      </TitleContainer>
      <DateContainer>
        {editMode ? (
          <input
            type="text"
            name="date"
            value={eventObject?.date || ""}
            onChange={handleInputChange}
          />
        ) : (
          eventObject?.date || ""
        )}
      </DateContainer>
      <TypeContainer>
        {editMode ? (
          <input
            type="text"
            name="type"
            value={eventObject?.type || ""}
            onChange={handleInputChange}
          />
        ) : (
          eventObject?.type || ""
        )}
      </TypeContainer>
      <DescriptionContainer>
        {editMode ? (
          <textarea
            name="description"
            value={eventObject?.description || ""}
            onChange={handleInputChange}
          />
        ) : (
          eventObject?.description || ""
        )}
      </DescriptionContainer>
      <ArtistContainer>
        <Button onClick={handleArtistClick}>
          {eventObject?.artistName || ""}
        </Button>
        <Button onClick={handleArtistClick}>
          {eventObject?.artistEmail || ""}
        </Button>
        <Button
          onClick={() => router.push(`/edit-artist/${eventObject.artistId}`)}
        >
          Create/Edit Artist Page
        </Button>
      </ArtistContainer>
      <ButtonContainer>
        {editMode ? (
          <>
            <Button onClick={handleSaveClick}>Save Changes</Button>
            <Button onClick={handleDeleteClick}>Delete Event</Button>
          </>
        ) : (
          <Button onClick={handleEditClick}>EDIT EVENT</Button>
        )}
      </ButtonContainer>
    </article>
  );
}

const TitleContainer = styled.h2`
  font-size: 28px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #95091b;
  line-height: 3.4;
  margin-top: 0.5px;
`;
const DateContainer = styled.p`
  font-size: 18px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #95091b;
  line-height: 3.4;
  margin-top: 0.5;
  margin-bottom: 10px;
`;
const TypeContainer = styled.p`
  font-size: 18px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #95091b;
  line-height: 3.4;
  margin-top: 0.5;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const ArtistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 18px;
  background-color: #95091b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const DescriptionContainer = styled.p`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #95091b;
  line-height: 3.4;
  margin-top: 0.5;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 30px;
`;
