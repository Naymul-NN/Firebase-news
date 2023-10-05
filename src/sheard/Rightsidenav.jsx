import { FaGoogle,FaGithub,FaFacebook,FaYoutube,FaInstagram } from 'react-icons/fa';
import qzone1 from '../assets/qZone1.png'
import qzone2 from '../assets/qZone2.png'
import qzone3 from '../assets/qZone3.png'
import { Link } from 'react-router-dom';

const Rightsidenav = () => {
    return (
        <div>
               <div className='space-y-3'>
               <h1 className="text-3xl space-y-3">login with</h1>
               <button className="btn border w-full ">
                  <FaGoogle/>
                  Google
                 </button>
                 <button className="btn border  w-full">
                  <FaGithub/>
                  Github
                 </button>
               </div>
               <div className=''>
               <h1 className="text-3xl ">Find us on</h1>
               <Link href='' className="btn border w-full ">
                  <FaFacebook/>
                  Facebook
                 </Link>
                 <Link href='' className="btn border w-full ">
                  <FaYoutube/>
                  youtube
                 </Link>
                 <Link href='' className="btn border w-full">
                  <FaInstagram/>
                  instagram
                 </Link>
               </div>
               <div>
                   <h1 className='text-3xl'>Q-zone</h1>
                   <img src={qzone1} alt="" />
                   <img src={qzone2} alt="" />
                   <img src={qzone3} alt="" />
               </div>
               <div>

               </div>
        </div>
    );
};

export default Rightsidenav;