// Nome, email, telefone, captcha

import { ChangeEvent, FormEvent, useState } from "react"

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

export default function NewForm () {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [captchaResult, setCaptchaResult] = useState<string>('')
  const [captcha] = useState(generateCaptcha())

  // const handleChangeName = (event: ChangeEvent<HTMLInputElement) => {
  //   setName(event.target.value)
  // }

  const handleSubmit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (String(captcha.result) !== captchaResult) {
      alert('Validação incorreta')
    }

    await fetch('https://landing-page-api.vercel.app/api/lead', {
      method: 'POST',
      body: JSON.stringify({
          email,
          phone,
          name
      })
    })

    alert('LEAD enviado com SUCESSO')
    
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            // name="name"
            required
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            // name="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phone">Telefone *</label>
          <input
            type="tel"
            id="phone"
            // name="phone"
            required
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="captcha">{`${captcha.n1} + ${captcha.n2} - ${captcha.n3}`} ?</label>
          <input
            type="text"
            id="captcha"
            // name="captcha"
            required
            onChange={(event) => setCaptchaResult(event.target.value)}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>Enviar</button>

      </form>
    </div>
  )
}
