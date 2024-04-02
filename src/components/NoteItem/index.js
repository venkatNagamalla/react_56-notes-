// Write your code here

import {Note, NoteText, NoteDesc} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <Note>
      <NoteText>{title}</NoteText>
      <NoteDesc>{note}</NoteDesc>
    </Note>
  )
}

export default NoteItem
