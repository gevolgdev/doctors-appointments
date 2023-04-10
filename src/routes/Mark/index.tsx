import { useState } from 'react'
import { MarkContainer, MarkContent } from "./style";
import { TypeProps, AppointmentsProps } from '../../types/types';

const Mark = () => {

  const INIITAL_APPOINTMENTS: AppointmentsProps = {
    doctor: '',
    subject: '',
    date: '',
    time: '',
  }
  const [appointments, setAppointments] = useState<AppointmentsProps>(INIITAL_APPOINTMENTS);

  // Salvar todas as infos em um objeto;
  // setar ele no nosso `appointments`;
  // Adicionar no Redux;

  function handleAddAppointmentsSelect(event: React.ChangeEvent<HTMLSelectElement | null>): void {
    const { id, value } = event.target;
    setAppointments((prev) => ({
      ...prev,
      [id]: value,
    }))
  };
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
  console.log(appointments)
  
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
      <MarkContent>
        <h1>Agende sua consulta</h1>

        <div className="inputs-content">
          <span>Médico</span>
          <select id='doctor' value={appointments.doctor} onChange={handleAddAppointmentsSelect}>
            <option value="" disabled selected>-----</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.option}>
                {doctor.option}
              </option>
            ))}
          </select>
        </div>

        <div className="inputs-content">
          <span>Assunto</span>
          <select id='subject' value={appointments.subject} onChange={handleAddAppointmentsSelect}>
            <option value="" disabled selected>-----</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.option}>
                {subject.option}
              </option>
            ))}
          </select>
        </div>

        <div className="inputs-content">
          <span>Data</span>
          <input id='date' type="date" value={appointments.date} onChange={handleAddAppointmentsInput}/>
        </div>

        <div className="inputs-content">
          <span>Hora</span>
          <input id='time' type="time" value={appointments.time} onChange={handleAddAppointmentsInput}/>
        </div>

        <button>
          Marcar consulta
        </button>
      </MarkContent>
    </MarkContainer>
  )
}

export default Mark;