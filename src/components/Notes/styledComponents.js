// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotesContainer = styled.div`
  height: 100%;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  text-align: center;
`
export const FormContainer = styled.form`
  height: 230px;
  width: 100%;
  box-shadow: 2px 2px 10px 3px #d8d8d8;
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  height: 38px;
  width: 100%;
  padding-left: 2px;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: 'Roboto';
  color: #1e293b;
  &::placeholder {
    font-weight: 500;
    color: #334155;
    font-size: 15px;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 55%;
  padding: 5px 0px 0px 2px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  margin-top: 10px;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    height: 40%;
  }
`

export const AddButton = styled.button`
  height: 37px;
  width: 70px;
  background-color: #4c63b6;
  border: none;
  color: #ffffff;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 18px;
`

export const NotesList = styled.ul`
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`

export const NoNoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin-top: 20px;
`

export const NoNoteImg = styled.img`
  width: 80px;
`

export const NoNoteHeading = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  color: #334155;
  font-weight: 450;
`

export const NoNoteText = styled.p`
  font-size: 13px;
  color: #475569;
  font-family: 'Roboto';
`
