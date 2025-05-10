import {Link, NavLink} from "react-router-dom";



function Navbar(){
  return (
    <div>
      <nav className={`h-32 w-full navbar sticky z-50`}>
        <header className={`bg-white w-full h-full flex items-center`}>
          <div className={`w-full flex flex-row justify-between mx-10 items-center`}>
            <div className={`text-black font-bold text-4xl flex gap-3 place-content-center`}>
              <Link to={`/`}>
                <img src="src/assets/panayhub-logo.png" alt={`panayhub logo`}/>
              </Link>
              <Link to={`/`}>
                <h1>PanayHub</h1>
              </Link>
            </div>
            <div className={``}>
              <ul className={`flex gap-9 items-center font-bold text-(--body-font-color)`}>
                <li>
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
                <li>
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
                <li>
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
                <li>
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
              </ul>
            </div>
          </div>
        </header>
      </nav>
    </div>
  );
}

export default Navbar;