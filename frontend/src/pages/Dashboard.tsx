import Footer from "@/components/Footer.tsx";


function Dashboard() {
  return (
    <div className={`min-h-screen bg-white`}>
      <div className={`p-10`}>
        <section>
          <h1 className={`font-serif font-bold text-7xl gradient-text-highlight`}>
            Dashboard
          </h1>
        </section>

        <section>
          <div className={`grid grid-cols-3 place-items-center gap-4`}>
            <div>
              <ul>
                <li>
                  PRovince
                </li>
              </ul>
            </div>
            <div>
              heatmap
            </div>
            <div>
              charts
            </div>
          </div>
        </section>
        <section className={`w-full  flex justify-center items-center`}>
          <div className={`bg-chatbot-light rounded-xl w-[934px] h-[509px]`}>
            <div className={`p-10`}>
              <div className={`flex w-full border gap-2 font-bold justify-around text-dashboard-blue-light text-2xl`}>
                <h2>
                  Title
                </h2>
                <h2>
                  Researcher
                </h2>
                <h2>
                  Library
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;