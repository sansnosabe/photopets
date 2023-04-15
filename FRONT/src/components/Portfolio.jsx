import { Link } from "react-router-dom";

function Portfolio () {
  return (
    <div className='portofolio flex flex-row space-x-2'>
      <div className='info-card'>
        <a href='https://www.linkedin.com/in/sandra-erentxun/'>Sandra Erentxun</a>
      </div>
      <div className='info-card'>
        <a href='https://www.linkedin.com/in/cjavierlopez/'>Javier López</a>
      </div>
    </div>
  );
};

export default Portfolio;