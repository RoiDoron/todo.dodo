import { AppFooter } from "./cmp/AppFooter.jsx"
import { AppHeader } from "./cmp/AppHeader.jsx"
import { TodoApp } from "./pages/TodoApp.jsx"
import { TodoDetails } from "./pages/TodoDetails.jsx"
import { TodoEdit } from "./pages/TodoEdit.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux



export class App extends React.Component {

    render() {
        return (
            // <Provider store={store}>
                <Router>
                    <section className="app">
                        <AppHeader />
                        <main className='main-layout'>
                            <Routes>
                                <Route element={<TodoApp />} path="/" />
                                <Route element={<TodoDetails />} path="/about" />
                                <Route element={<TodoEdit />} path="/car" />
                            </Routes>
                        </main>
                        <AppFooter />
                    </section>
                </Router>
            // </Provider>

        )
    }
}


