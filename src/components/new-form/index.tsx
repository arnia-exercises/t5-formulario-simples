// Nome, email, telefone, captcha

import { ChangeEvent, FormEvent, useState } from "react"
import InputGroup from "../input-group";

function random() {
  return Math.floor(Math.random() * 10) + 1;
}

function generateCaptcha() {
  const n1 = random()
  const n2 = random()
  const n3 = random()
  const result = n1 + n2 - n3

  return { n1, n2, n3, result }
}

type ValuesProps = {
  name: string
  email: string
  phone: string
  captcha: string
}

export default function NewForm () {
  const [captcha] = useState(generateCaptcha())

  const [values, setValues] = useState<Partial<ValuesProps>>({})

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const myInput = event.target.name

    setValues((prevValue) => ({
      ...prevValue,
      [myInput]: event.target.value
    }))

    // setValues((prevValue) => {
    //   // const obj = Object.assign({}, prevValue, {[myInput]: event.target.value})
    //   // return obj

    //   return {
    //     ...prevValue,
    //     [myInput]: event.target.value
    //   }
    // })

  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // captcha.result.toString()
    if (String(captcha.result) !== values.captcha) {
      alert('Validação incorreta')
    }

    const { captcha: _, ...rest } = values

    try {
      await fetch('https://landing-page-api.vercel.app/api/lead', {
        method: 'POST',
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      alert('LEAD enviado com SUCESSO')
    } catch (e) {
      alert('DEU RUIM')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup name="name" label="Nome *" handleChange={handleChange} />
        <InputGroup name="email" label="E-mail *" handleChange={handleChange} type="email" />
        <InputGroup name="phone" label="Telefone *" handleChange={handleChange} type="tel" />
        <InputGroup name="captcha"
          label={`${captcha.n1} + ${captcha.n2} - ${captcha.n3} ?`}
          handleChange={handleChange}
        />
        <button type="submit">Enviar</button>

      </form>
    </div>
  )
}
