import { UserMsg } from "./UserMsg.jsx";

const { Link, NavLink } = ReactRouterDOM;

export function AppHeader(){
    return (
        <header className="app-header full main-layout">
          <section className="header-container">
            <h1>Todo Todo</h1>
            <nav className="app-nav">
              <NavLink to="/">Todo</NavLink>
            </nav>
          </section>
          {/* {user ? (
            <section>
              <span to={`/user/${user._id}`}>
                Hello {user.fullname} <span>${user.score.toLocaleString()}</span>
              </span>
              <button onClick={onLogout}>Logout</button>
            </section>
          ) : (
            <section>
              <LoginSignup onSetUser={onSetUser} />
            </section>
          )} */}
          <UserMsg />
        </header>
      )
}