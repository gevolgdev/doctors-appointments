import { useState, useEffect } from 'react'
import { MarkContainer, MarkContent } from "./style";
import { TypeProps, AppointmentsProps } from '../../types/types';
import { useDispatch } from 'react-redux';
import { addAppointments } from '../../redux/sliceAppointments';
import Toast from '../../components/Toast';

const Mark = () => {

  const INIITAL_APPOINTMENTS: AppointmentsProps = {
    name: '',
    subject: '',
    day: '',
    mounth: '',
    time: '',
  };
  const [appointments, setAppointments] = useState<AppointmentsProps>(INIITAL_APPOINTMENTS);
  const [toast, setToast] = useState<boolean>(false);

  const dispatch = useDispatch();

  function handleAddAppointmentsSelect(event: React.ChangeEvent<HTMLSelectElement | null>): void {
    const { id, value } = event.target;
    setAppointments((prev) => ({
      ...prev,
      [id]: value,
    }))
  };

  function handleAddAppointmentsInput(event: React.ChangeEvent<HTMLInputElement | null>): void {
    const { id, value } = event.target;
    setAppointments((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  
  function handleNewAppointments(): void {
    dispatch(addAppointments(appointments));
    setAppointments(INIITAL_APPOINTMENTS);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 4000);
    
  };

  function daysOfMounth(): string[] {
    const days: string[] = [];
    for(let i = 1; i <= 31; i++) {
      days.push(`
        ${ i < 10 ? `0${i}` : `${i}`}
      `);
    }
    return days;
  };

  const mounths: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const doctors: TypeProps[] = [
    {id: 1, option: 'Ricardo'},
    {id: 2, option: 'Rodolfo'},
    {id: 3, option: 'José'},
    {id: 4, option: 'Rodrigo'},
  ];

  const subjects: TypeProps[] = [
    { id: 1, option: 'Cardiologia' },
    { id: 2, option: 'Dermatologia' },
    { id: 3, option: 'Ginecologia' },
    { id: 4, option: 'Pediatria' },
  ];

  return (
    <MarkContainer>
      { toast && <Toast/>}
      <MarkContent>
        <h1>Agende sua consulta</h1>
        <div className="inputs-content">
          <span>Seu nome</span>
          <input id='name' type="text" value={appointments.name} onChange={handleAddAppointmentsInput} placeholder= 'Digite aqui'/>
        </div>

        <div className="inputs-content">
          <span>Assunto</span>
          <select id='subject' value={appointments.subject} onChange={handleAddAppointmentsSelect}>
            <option value="" disabled>-----</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.option}>
                {subject.option}
              </option>
            ))}
          </select>
        </div>

        <div className="date-container">
          <span>Data</span>
          <div className="date-content">
            <select id='day' value={appointments.day} onChange={handleAddAppointmentsSelect}>
              <option value="" disabled>Dia</option>
              {daysOfMounth().map(item => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select id='mounth' value={appointments.mounth} onChange={handleAddAppointmentsSelect}>
              <option value="" disabled>Mês</option>
              {mounths.map(item => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="inputs-content">
          <span>Hora</span>
          <input id='time' type="time" value={appointments.time} onChange={handleAddAppointmentsInput}/>
        </div>

        <button onClick={handleNewAppointments}>
          Marcar consulta
        </button>
      </MarkContent>
    </MarkContainer>
  )
}

export default Mark;