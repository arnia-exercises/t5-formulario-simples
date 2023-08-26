import { styled } from "styled-components";

export const FormControl = styled.div`
  margin-bottom: 1rem;
`
export const Input = styled.input`
  border: 1px solid purple;
  border-radius: 8px;
  height: 35px;
  font-size: .875rem;
  background-color: white;
  width: 300px;
  padding: 0 1rem;

  &:hover {
    border-color: pink;
  }
`

export const Label = styled.label`
  font-size: .875rem;
  color: #313131;
  margin-bottom: 5px;
  display: block;
`