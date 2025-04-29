
function Footer(){

  return(
    <div className={`w-full bg-(--body-font-color) h-72`}>
      <div className={`grid grid-cols-3 place-items-center h-full`}>
        <div className={`text-(--body-font-highlight) font-serif text-7xl`}>Contact Us.</div>

        <div className={`flex flex-col`}>
          <h1 className={`font-serif font-bold text-white text-2xl`}>Center for<br/>
            West Visayan <br/>
            Studies </h1>
          <div className={`flex`}>
            <p>pdcordero@up.edu.ph</p>
          </div>
          <div className={`flex`}>
            <p>+63 9214605606</p>
          </div>
        </div>
        <div>
          <h1 className={`font-serif font-bold text-white text-2xl`}>
            University of the <br/>
            Philippines Visayas - <br/>
            Division of Humanities
          </h1>
         <div className={`flex`}>
            <p>pdcordero@up.edu.ph</p>
          </div>
          <div className={`flex`}>
            <p>+63 9214605606</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;