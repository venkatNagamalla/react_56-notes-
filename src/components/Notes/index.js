// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesContainer,
  NotesHeading,
  FormContainer,
  Input,
  TextArea,
  AddButton,
  NotesList,
  NoNoteContainer,
  NoNoteImg,
  NoNoteHeading,
  NoNoteText,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [allNotes, setAllNotes] = useState([])

  const onChangeTitle = e => setTitle(e.target.value)
  const onChangeNote = e => setNote(e.target.value)

  const onClickAddButton = e => {
    e.preventDefault()
    if (title !== '' && note !== '') {
      const newNote = {
        id: uuidv4(),
        title,
        note,
      }
      setAllNotes(prevNotes => [...prevNotes, newNote])
      setTitle('')
      setNote('')
    }
  }

  const renderEmptyView = () => (
    <NoNoteContainer>
      <NoNoteImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNoteHeading>No Notes Yet</NoNoteHeading>
      <NoNoteText>Notes you add will appear here</NoNoteText>
    </NoNoteContainer>
  )

  const renderNonEmptyView = () => (
    <NotesList>
      {allNotes.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesList>
  )

  return (
    <MainContainer>
      <NotesContainer>
        <NotesHeading>Notes</NotesHeading>
        <FormContainer onSubmit={onClickAddButton}>
          <Input
            value={title}
            onChange={onChangeTitle}
            placeholder="Title"
            type="text"
          />
          <TextArea
            value={note}
            onChange={onChangeNote}
            placeholder="Take a Note..."
          />
          <AddButton type="submit">Add</AddButton>
        </FormContainer>
        {allNotes.length === 0 ? renderEmptyView() : renderNonEmptyView()}
      </NotesContainer>
    </MainContainer>
  )
}

export default Notes
