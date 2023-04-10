# Consultas medicas
Bem-vindos ao meu repositório do aplicativo de agendar consultas medicas.

### Resumo
Este aplicativo se consiste um marcador de consultas medicas. Basicamente serão dois componentes principais. O primeiro vai registrar todas as informações da consulta médica como: Médico, especialidade, data, horário, clínica e descrição. O outro componente seria o Dashboard do administrador que irá ver todas as consultas agendadas.

### Aprendizado
Meu intuito com esse projeto é reforçar conteitos básicos de:
- Typescript
- Redux.

### Dependências
```shell
npm install react-router-dom @types/react-router-dom  @types/styled-components styled-components react-icons 
```

# Registro de desenvolvimento
Então vamos começar nosso aplicativo?

Em resumo, o algoritmo se consiste em: 

1. Coletar informações de consulta do usuário;
2. Salvar esse objeto no redux;
3. Retonar essas informações na página "Dashboard"; 


#### ✅ Coletar informações de consulta do usuário
Para coletar essas informações, eu crio duas funções, uma para o `select`, e outra para o `input`:

A função do "select" se consiste no seguinte: 
- Ao criar a função ela recebe o argumento de event e sua tipagem.
- Dentro da função eu desestruturo o `event.target.value` e declaro o `setAppointments`.
- Crio um objeto com a chave `id` do select e o valor é o `event.target.value`.

```tsx
function handleAddAppointmentsSelect(event: React.ChangeEvent<HTMLSelectElement | null>): void {
  const { id, value } = event.target;
  setAppointments((prev) => ({
    ...prev,
    [id]: value,
  }))
};
```

A função do "input" complica mais um pouco por conta da formatação da data:
- Fazemos uma condição para o caso o input de data chame a função rode apenas esse bloco de código.
- Nele, coletamos o ano, mês e dia enviado pelo input e fazemos um array com strings usando split().
- Depois a instânciamos do objeto Date e passos a data desejada.
- Fazemos uma variavel e pegamos o dia/mês/ano do Date para formatarmos a data no formato Brasileiro.
- E depois adicionamos no nosso objeto.
```tsx
function handleAddAppointmentsInput(event: React.ChangeEvent<HTMLInputElement | null>): void {
  const { id, value } = event.target;

  if (id === 'date') {
    const [year, month, day] = value.split('-');
    const date: Date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const formattedDate: string = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setAppointments((prev) => ({
      ...prev,
      [id]: formattedDate,
    }))
  } else {
    setAppointments((prev) => ({
      ...prev,
      [id]: value,
    }))
  }
};
```

Pronto, primeira etapa finalizada e informações de consulta médica já salvas em um objeto.
