import { TbMailFilled } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
function Footer(){

  return(
    <div className={`w-full bg-(--body-font-color) h-72`}>
      <div className={`grid grid-cols-3 place-items-center h-full`}>
        <div className={`text-(--body-font-highlight) font-bold font-serif text-7xl`}>Contact Us.</div>

        <div className={`flex flex-col`}>
          <h1 className={`font-serif font-bold text-white text-3xl`}>Center for<br/>
            West Visayan <br/>
            Studies </h1>
          <div className={`flex text-white gap-2 items-center `}>
            <TbMailFilled className={` size-5`}/>
            <p>pdcordero@up.edu.ph</p>
          </div>
          <div className={`flex text-white gap-2 items-center`}>
            <BsFillTelephoneFill className={`size-5`}/>
            <p>+63 9214605606</p>
          </div>
        </div>
        <div>
          <h1 className={`font-serif font-bold text-white text-3xl`}>
            University of the <br/>
            Philippines Visayas - <br/>
            Division of Humanities
          </h1>
         <div className={`flex text-white gap-2 items-center `}>
           <TbMailFilled className={` size-5`}/>
            <p>pdcordero@up.edu.ph</p>
          </div>
          <div className={`flex text-white gap-2 items-center`}>
            <BsFillTelephoneFill className={`size-5`}/>
            <p>+63 9214605606</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;