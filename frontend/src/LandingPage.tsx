function LandingPage(){
  return (
    <div className="w-full min-h-screen ">
      <div className={`flex flex-col min-h-screen`}>
        <div className={`relative min-w-full max-w-lg overflow-hidden`}>
          <div
            className={`absolute -top-50 -left-10 w-100 h-100 bg-yellow-400 rounded-full -mix-blend-multiply filter blur-3xl opacity-30`}/>
          <div
            className={`absolute -top-10 -left-20 w-100 h-100 bg-orange-500 rounded-full -mix-blend-multiply filter blur-3xl opacity-50`}/>
          <div
            className={` absolute top-0 -right-10 w-150 h-150 bg-yellow-400 rounded-full -mix-blend-multiply filter  blur-3xl  opacity-30`}/>
          <div
            className={`absolute top-0 -right-45 w-150 h-150 bg-orange-500 rounded-full -mix-blend-multiply filter blur-3xl opacity-50`}/>

          <div
            className={`absolute top-150 left-40 w-150 h-150 bg-yellow-400 rounded-full -mix-blend-multiply filter  blur-3xl  opacity-30`}/>
          <div
            className={`absolute top-150 -left-40 w-150 h-150 bg-orange-500 rounded-full -mix-blend-multiply filter blur-3xl opacity-50`}/>

          <div className={`relative grid grid-cols-2 h-150`}>
            <img src="src/assets/panay-island.png" alt={`panay island`}/>
            <div className={`flex flex-col justify-center items-center`}>
              <h1 className={`text-(--body-font-color)  text-8xl font-serif`}>Panay Folk</h1>
              <h1 className={`text-(--body-font-color) text-8xl font-serif`}>Narratives in</h1>
              <h1 className={`text-(--body-font-highlight)  text-8xl font-bold font-serif`}>One Hub.</h1>
              <p className={`text-(--body-font-color)`}>Looking for Panay Folk Narratives has been made easier.</p>
              <p className={`text-(--body-font-color)`}>PanayHub is the starting point to your research journey.</p>
            </div>
          </div>
          <div className={`relative w-full flex items-center justify-center`}>
            <h1 className={`text-(--body-font-color) text-6xl font-serif italic`}>Some <span
              className={`text-(--body-font-highlight)`}>random ass</span> title.</h1>
          </div>
          <div className={`relative grid grid-cols-2 grid-rows-2 h-96 place-items-center`}>
            <div className={`flex place-items-center flex-col`}>
              <img src="src/assets/user%201.png" alt={`user`}/>
              <h2 className={`text-(--body-font-color) font-bold`}>Woah, another title</h2>
              <p className={`text-(--body-font-color)`}>Is that a video on the right? Oh, cool. Paste a pre-recorded
                video
                of a user navigating through the website.</p>
            </div>
            <div>
              <div className={`text-black place-items-center`}>image</div>
            </div>
            <div className={`flex place-items-center flex-col`}>
              <img src="src/assets/laptop-computer%201.png" alt={`user`}/>
              <h2 className={`text-(--body-font-color) font-bold`}>Woah, another title</h2>
              <p className={`text-(--body-font-color)`}>Is that a video on the right? Oh, cool. Paste a pre-recorded
                video
                of a user navigating through the website.</p>
            </div>
            <div>
              <div className={`text-black place-items-center`}>image</div>
            </div>
          </div>
          <div className={`relative grid grid-cols-3 w-full text-black place-items-center h-96`}>
            <div>iamge</div>
            <div>
              <h1 className={` font-serif text-(--body-font-color) text-6xl text-center`}>We believe in <br/> <span
                className={` font-serif underline text-(--body-font-highlight)`}>something.</span></h1>
            </div>
            <div>image</div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default LandingPage;