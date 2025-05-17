import Footer from "@/components/Footer.tsx";
import 'heatmap.js';
import Heatmap from "@/components/Heatmap.tsx";
import FilterDropdown from "@/components/FilterDropdown.tsx";
import DashboardFilters from "@/components/DashboardFilters.tsx";
import StoryList from "@/components/StoryList.tsx";


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
            <DashboardFilters/>
            <div>
              <Heatmap/>
            </div>
            <div>
              charts
            </div>
          </div>
        </section>
        <section className={`w-full  flex justify-center items-center`}>
          <StoryList/>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;