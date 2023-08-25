import { ChangeEvent, FormEvent, useState } from "react"

// Rota: https://landing-page-api.vercel.app/api/lead

// Método: POST
// Exemplo de body:
// {
//     "email": "teste@teste.com",
//     "phone": "(31) 996853121",
//     "name": "Teste Teste"
// }

type Values = {
  name: string
  email: string
  phone: string
  captcha: string
}

function random() {
  return Math.floor(Math.random() * 10) + 1;
}

function generate() {
  const num1 = random()
  const num2 = random()
  const num3 = random()

  return {
    num1,
    num2,
    num3,
    result: num1 + num2 - num3
  }
}

export default function Form () {
  const [values, setValues] = useState<Partial<Values>>({})
  const { num1, num2, num3, result } = generate()

  const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target

    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(values);
    
  }

  return (
    <article>
      <header>
        <h2>Preencha o formulário abaixo e tenha acesso ao e-book "O passo-a-passo para se tornar um desenvolvedor de Software"</h2>
      </header>
      <section>
        <form>
          <div>
            <label htmlFor="name">Nome *</label>
            <input type="text" name="name" id="name" required onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">E-mail *</label>
            <input type="email" name="email" id="email" required onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone">Telefone *</label>
            <input type="tel" name="phone" id="phone" required onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="captcha">{num1} + {num2} - {num3} ? {result}*</label>
            <input type="text" name="captcha" id="captcha" onChange={handleChange} />
          </div>
          <div>
            <button type="submit" onSubmit={handleSubmit}>Baixar E-book</button>
          </div>
        </form>
      </section>
    </article>
  )
}