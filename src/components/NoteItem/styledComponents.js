// Style your elements here

import styled from 'styled-components'

export const Note = styled.li`
  width: 100%;
  border: 1.8px solid #d8d8d8;
  padding: 15px;
  min-height: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 31%;
    margin-right: 13px;
  }
`

export const NoteText = styled.h1`
  color: #334155;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Roboto';
  margin: 0px;
`

export const NoteDesc = styled.p`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 12px;
  font-weight: 500;
`
