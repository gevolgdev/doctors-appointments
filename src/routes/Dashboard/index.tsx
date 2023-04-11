import { useSelector } from 'react-redux'
import { useAppointments } from '../../redux/sliceAppointments';
import { DashContainer, DashContent, Patient } from './style';
import { AppointmentsProps } from '../../types/types';


const Dashboard = () => {

  const appointments = useSelector(useAppointments);

  const newAppointments: AppointmentsProps[] = appointments.slice(1)

  console.log(newAppointments)

  return (
    <DashContainer>
      <DashContent>
        <h1>Consultas agendadas</h1>
        {
          newAppointments.length <= 0
          ? <h1 className='no-content'>Não há consultas marcadas!</h1> 
          : (
            newAppointments.map(appointments => (
              <Patient>
                <div className='content'>
                  <span>Paciente</span>
                  <h3>{appointments.name}</h3>
                </div>
    
                <div className='line'/>
    
                <div className='content'>
                  <span>Sobre</span>
                  <h3>
                    {appointments.subject}
                  </h3>
                </div>
    
                <div className='content'>
                  <span>Data/Hora</span>
                  <h3>
                    {appointments.day}/{appointments.mounth} - {appointments.time}
                  </h3>
                </div>
              </Patient>
            )).reverse()
          )
        }
      </DashContent>
    </DashContainer>
  )
};

export default Dashboard;