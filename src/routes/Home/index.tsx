import { MouseEvent } from 'react';
import { HomeContainer } from "./style";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';


interface ButtonProps {
  id: number;
  title: React.ReactElement;
  link: string;
  class: string;
};

const Home = () => {

  const buttons: ButtonProps[] = [
    {id: 1, title: <p>Sou<br/> paciente!</p>, link: 'mark', class: 'button-1'},
    {id: 2, title: <p>Sou<br/> médico!</p>, link: 'dashboard', class: 'button-2'},
  ];

  return (
    <HomeContainer>
      <div className='home-content'>
       {buttons.map((button) => (
        <Link to={`/${button.link}`}>
          <button key={button.id} className={button.class}>
            <span>
              <MdOutlineKeyboardArrowRight/>
            </span>
            {button.title}
          </button>
        </Link>
       ))}
      </div>
    </HomeContainer>
  )
};

export default Home;