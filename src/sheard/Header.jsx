import logo from '../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='text-center space-y-5'>
            <img className='mx-auto' src={logo} alt="" />
            <h1>Journalism Without Fear or Favour</h1>
            <p>
             {moment().format('dddd, MMMM D, YYYY')}
            </p>
        </div>
    );
};

export default Header;