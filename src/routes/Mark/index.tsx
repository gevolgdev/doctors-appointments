import { useState } from 'react'
import { MarkContainer, MarkContent } from "./style";

interface TypeProps {
  id: number;
  option: string;
};

interface AppointmentsProps {
  doctor: string;
  subject: string;
  date: string;
  time: string;
}

const Mark = () => {

  const [appointments, setAppointments] = useState<AppointmentsProps | null>(null);

  function handleAddAppointments() {
    
  }

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
          <select>
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
          <select>
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
          <input type="date"/>
        </div>

        <div className="inputs-content">
          <span>Hora</span>
          <input type="time"/>
        </div>
      </MarkContent>
    </MarkContainer>
  )
}

export default Mark;