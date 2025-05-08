import {TbMailFilled} from "react-icons/tb";
import {BsFillTelephoneFill} from "react-icons/bs";


function Contact() {

  function onSendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  }

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center`}>
      <div className={`relative flex flex-col items-center`}>
        <h1 className={`text-7xl text-font-highlight font-bold font-serif`}>Contact Us.</h1>
        <p className={`text-body-font`}>Have a story you’re itching to tell? You can send us one through the channels below.</p>

        <div className={`grid grid-cols-2`}>

          <div className={`flex gap-1`}>
            <img src="src/assets/cwvs%20big.png" alt={`UPV Logo`} />
            <div className={`text-body-font h-full flex flex-col  justify-center`}>
              <h1 className={`font-serif font-bold text-3xl`}>Center for<br/>
                West Visayan Studies </h1>
              <div className={`flex  gap-2 items-center `}>
                <TbMailFilled className={` size-5`}/>
                <p>pdcordero@up.edu.ph</p>
              </div>
              <div className={`flex gap-2 items-center`}>
                <BsFillTelephoneFill className={`size-5`}/>
                <p>+63 9214605606</p>
              </div>
            </div>

          </div>
          <div className={`flex gap-1`}>
            <img src="src/assets/upv%20big.png" alt={`UPV Logo`}/>
            <div className={`text-body-font h-full flex flex-col  justify-center`}>
              <h1 className={`font-serif font-bold text-3xl `}>
                University of the <br/>
                Philippines Visayas - <br/>
                Division of Humanities
              </h1>
              <div className={`flex gap-2 items-center `}>
                <TbMailFilled className={` size-5`}/>
                <p>pdcordero@up.edu.ph</p>
              </div>
              <div className={`flex gap-2 items-center`}>
                <BsFillTelephoneFill className={`size-5`}/>
                <p>+63 9214605606</p>
              </div>
            </div>
          </div>
          <div>

          </div>

        </div>
        <div className={`bg-chatbot-light w-[995px] rounded-[60px] h-[587px]`}>
          <div className={`grid grid-cols-2 p-10 place-items-center h-full border-red-200 border-2`}>
            <div className={` h-full flex flex-col justify-center`}>
              <h2 className={`text-white font-bold text-4xl`}>Have any <br/> questions?</h2>
              <h1 className={`font-bold font-serif text-6xl text-font-contact-highlight`}>Let's talk.</h1>
            </div>
            <div className={`flex flex-col justify-center h-full`}>
              <form className={`h-full`} onSubmit={onSendEmail}>
                <div className={`grid grid-cols-2 gap-2 h-full`}>
                  <div className={`flex flex-col gap-1 justify-center h-full`}>
                    <input className={`bg-contact-dark text-white p-2 rounded-lg h-[53px]`} type={`text`}/>
                    <label className={`text-contact-light  ml-2`}>First Name</label>
                  </div>
                  <div className={`flex flex-col gap-1 justify-center h-full`}>
                    <input className={`bg-contact-dark text-white p-2 rounded-lg h-[53px]`} type={`text`}/>
                    <label className={`text-contact-light ml-2`}>Last Name</label>
                  </div>
                  <div className={`flex flex-col gap-1 justify-center col-span-2 h-full`}>
                    <input type={"email"} className={`bg-contact-dark text-white w-full p-2 rounded-lg h-[53px]`}/>
                    <label className={`text-contact-light ml-2`}>Email</label>
                  </div>
                  <div className={`col-span-2 h-full`}>
                    <textarea className={`bg-contact-dark text-white h-full w-full p-2 rounded-lg`}></textarea>
                    <label className={`text-contact-light ml-2`}>Message</label>
                  </div>
                  <button type={`submit`}
                    className={`col-start-2 bg-gradient-to-r hover:cursor-pointer from-[#77BBFE] to-[#BBC6F9] rounded-sm font-bold text-2xl h-15 w-45 self-end`}>Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  );


}

export default Contact;