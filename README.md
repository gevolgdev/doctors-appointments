# Consultas medicas
Bem-vindos ao meu repositório do aplicativo de agendar consultas medicas.

### Resumo
Este aplicativo se consiste um marcador de consultas médicas. Basicamente serão dois componentes principais. O primeiro vai registrar todas as informações da consulta médica como: Nome, assunto, data e horário. O outro componente seria o Dashboard do administrador que irá ver todas as consultas agendadas.

### Aprendizado
Meu objetivo com esse projeto é reforçar conceitos básicos de:
- Typescript
- Redux.

### Dependências
```shell
npm install react-router-dom @types/react-router-dom  @types/styled-components styled-components react-icons react-redux @reduxjs/toolkit
```

# Registro de desenvolvimento
Então vamos começar nosso aplicativo?

Em resumo, o algoritmo se consiste em: 

1. Coletar informações de consulta do usuário;
2. Salvar esse objeto no Redux;
3. Retornar essas informações na página /Dashboard;


### ✅ Coletar informações de consulta do usuário
Para coletar essas informações, eu crio duas funções, uma para o “select”, e outra para o “input”:

A função do “select” se consiste no seguinte:

Ao criar a função ela recebe o argumento de event e sua tipagem.
Dentro da função eu desestruturo o `event.target` e o declaro dentro de `setAppointments`.
Crio um objeto com o valor.

```tsx
function handleAddAppointmentsSelect(event: React.ChangeEvent<HTMLSelectElement | null>): void {
  const { id, value } = event.target;
  setAppointments((prev) => ({
    ...prev,
    [id]: value,
  }))
};
```
- Função para os inputs

```tsx
function handleAddAppointmentsInput(event: React.ChangeEvent<HTMLInputElement | null>): void {
  const { id, value } = event.target;
  setAppointments((prev) => ({
    ...prev,
    [id]: value,
  }))
};
```
*Obs: Foi necessário a separação das função para `input` e `select` por conta da tipagem.*

Pronto, primeira etapa finalizada e informações de consulta médica já salvas em um objeto.

### ✅ Salvar esse objeto no redux
Agora vamos usar o Redux para gerenciar nosso estado da aplicação. Primeiro criamos um arquivo store.ts onde irá gerar nosso reducer que recebe um estado inicial e uma ação (action), e retorna um novo estado modificado baseado na ação.

```ts
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
}); 
```
- Criamos um Slice. O slice é uma parte do estado da aplicação que contém reducers e actions relacionados a um determinado domínio da aplicação.

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppointmentsProps } from '../types/types';

// Estado inicial
const INITIAL_STATE = [
  { name: '', subject: '', day: '', mounth: '', time: ''},
];

// Criação do Slice
const sliceAppointments = createSlice({
  // Nome do slice
  name: 'appointments',
  // Estado inicial
  initialState: INITIAL_STATE,
  // Reducer
  reducers: {
    // Função que gerencia o Reducer/Slice
    addAppointments(state, {payload}: PayloadAction<AppointmentsProps>) {
      return [
        ...state, 
        {
          name: payload.name, 
          subject: payload.subject, 
          day: payload.day, 
          mounth: payload.mounth, 
          time: payload.time
        }
      ]
    }
  }
});
```

- Exportação dos dados

```ts
// Reducer
export default sliceAppointments.reducer
// Função que será despachada
export const { addAppointments } = sliceAppointments.actions

// Função que retorna o estado inicial dos agendamentos
export const useAppointments = (state: any) => {
  return state.appointments as AppointmentsProps[]
}
```

- Colocamos o slice agora no `store.ts`

```ts
const store = configureStore({
  reducer: {
    appointments: sliceAppointments,
  },
}); 
```

- Para adicionar dados aos Reducers, fazemos um função que irá ser chamado em `onClick()` . Usamos o hook do Redux, `dispatch()`, e passamos uma função de callback que declaramos como Reducer. Dentro do callback passamos o novo estado.

```ts
  dispatch(addAppointments(appointments));
```

### ✅ Retonar essas informações na página "Dashboard"
Para a gente retornar os dados/estado usamos o hook do Redux `useSelector()` e passamos a função que está gerenciando o estado `useAppointments()`.

```ts
const appointments = useSelector(useAppointments);
```

- Para finalizar, eu retiro o primeiro objeto pois ele é apenas o estado inicial.

```ts
const newAppointments: AppointmentsProps[] = appointments.slice(1)
```

- Faço um `map()` nesse novo array sem o primeiro index.

# 🎉 E esse foi meu primeiro projeto usando Typescript e Redux. 🎉
😎 Obrigado e aguardem os próximos projetos!!<br>
<a href='https://www.instagram.com/p/Cq5gUhWMilY/'>Link do Reels desse Projeto</a>

