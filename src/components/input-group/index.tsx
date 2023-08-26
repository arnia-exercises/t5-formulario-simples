// import { Dispatch, SetStateAction } from "react"
// import { FormControl, Input, Label } from './styled'
import { ChangeEvent } from 'react'
import * as S from './styled'

interface Props {
  name: string
  label: string
  // handleChange: Dispatch<SetStateAction<string>>
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export default function InputGroup ({ name,label, handleChange, type = 'text' }: Props) {
  return (
    <S.FormControl>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={type}
        id={name}
        name={name}
        required
        onChange={handleChange}
      />
    </S.FormControl>
  )
}