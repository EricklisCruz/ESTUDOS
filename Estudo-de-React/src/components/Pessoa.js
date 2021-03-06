function Pessoa(props) {
  return (
    <div>
      <img src={props.foto} alt={props.nome} />
      <h2>Nome: {props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Profissao: {props.profissao}</p>
    </div>
  )
}

export default Pessoa

export function Pessoa2(foto, nome, idade, profissao) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}
