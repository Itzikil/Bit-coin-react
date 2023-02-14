import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/scss/global.scss'

import { HomePage } from './views/HomePage'
import { AppHeader } from './cpms/AppHeader'
import { ContactPage } from './views/ContactPage'
import { ContactDetailsPage } from './views/ContactDetailsPage'
import { ContactEditPage } from './views/ContactEditPage'
import { StatisticPage } from './views/StatisticPage'
import { SignupPage } from './views/signupPage'
import { AboutPage } from './views/aboutPage'

function App() {

    const isDark = ()=>{
        // let isDark1 = isDark1
        // return false
    }

    return (
        <Router>
            <section className={!isDark ? "main-app dark" : "main-app light"}>
                <AppHeader />
                <div className='nice-background' />
                <main className='container'>
                    <Routes>
                        <Route path="/contact/edit/:id" element={<ContactEditPage/>} />
                        <Route path="/contact/edit" element={<ContactEditPage/>} />
                        <Route path="/contact/:id" element={<ContactDetailsPage/>} />
                        <Route path="/signup" element={<SignupPage/>} />
                        <Route path="/statistic" element={<StatisticPage/>} />
                        <Route path="/contact" element={<ContactPage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/" element={<HomePage/>} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}

export default App
