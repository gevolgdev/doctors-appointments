import { ToastContainer } from "./style";
import { BsClipboardCheck } from 'react-icons/bs';


const Toast: React.FC = () => {
  return (
    <ToastContainer>
      <div>
        <BsClipboardCheck/>  Consulta agendada, aguarde confirmação!
      </div>
    </ToastContainer>
  )
}

export default Toast;