import { MouseEvent } from 'react';
import { HomeContainer } from "./style";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


interface ButtonProps {
  id: number;
  title: string;
  link: string;
  class: string;
};

const Home = () => {

  const buttons: ButtonProps[] = [
    {id: 1, title: 'Agente sua consulta!', link: 'mark', class: 'button-1'},
    {id: 2, title: 'Consultas agendadas!', link: 'dashboard', class: 'button-2'},
  ];

  return (
    <HomeContainer>
      <div className='home-content'>
       {buttons.map((button) => (
        <button key={button.id} className={button.class}>
          <span>
            <MdOutlineKeyboardArrowRight/>
          </span>
          {button.title}
        </button>
       ))}
      </div>
    </HomeContainer>
  )
};

export default Home;