import {Link, NavLink, useLocation} from "react-router-dom";



function Navbar(){
  const location = useLocation();
  const isSidebarPage = location.pathname === "/contributionguide";
  console.log(isSidebarPage)

  return (
    <div>
      <nav className={`h-32 ${isSidebarPage ? "ml-64 w-[calc(100%-16rem)]" : "w-full"} navbar sticky z-50`}>
        <header className={`bg-neutral-200 w-full h-full flex items-center`}>
          <div className={`w-full flex flex-row justify-between mx-10 items-center`}>
            {!isSidebarPage &&
                  <div className={`text-black font-bold text-4xl flex gap-3 place-content-center`}>
                    <Link to={`/`}>
                        <img src="/panayhub-logo.png" alt={`panayhub logo`}/>
                    </Link>
                    <Link to={`/`}>
                        <h1>PanayHub</h1>
                    </Link>
                </div>
            }

              <div className={`${isSidebarPage? 'ml-auto': ''}`}>
              <ul className={`flex gap-9 items-center font-bold text-(--body-font-color)`}>
                <li className={`visited:text-inherit hover:bg-nav-hover rounded-full py-1 px-4 ease-out duration-300`}>
                  <NavLink
                    to="/"
                    end
                    className={({isActive, isPending}) =>
                      isPending ? "pending" : isActive ? "active" : "" +
                        `nav-button`
                    }
                  >
                    Home
                  </NavLink>

                </li>
                <li className={`visited:text-inherit hover:bg-nav-hover rounded-full py-1 px-4 ease-out duration-300`}>
                  <NavLink
                    to="/chatbot"
                    className={({isActive, isPending}) =>
                      isPending ? "pending" : isActive ? "active" : "" +
                        `nav-button`
                    }
                  >
                    Chatbot
                  </NavLink>

                </li>

                <li className={`visited:text-inherit hover:bg-nav-hover rounded-full py-1 px-4 ease-out duration-300`}>
                  <NavLink
                    to="/contact"
                    className={({isActive, isPending}) =>
                      isPending ? "pending" : isActive ? "active" : "" +
                        `nav-button`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li
                  className={`visited:text-inherit hover:bg-nav-hover rounded-full py-1 px-4 ease-out duration-300`}>
                  <NavLink
                    to="/dashboard"
                    className={({isActive, isPending}) =>
                      isPending ? "pending" : isActive ? "active" : "" +
                        `nav-button`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li
                  className={`visited:text-inherit hover:bg-nav-hover rounded-full py-1 px-4 ease-out duration-300`}>
                  <NavLink
                    to="/contributionguide"
                    className={({isActive, isPending}) =>
                      isPending ? "pending" : isActive ? "active" : "" +
                        `nav-button`
                    }
                  >
                    Contribution Guide
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </nav>
    </div>
  );
}

export default Navbar;