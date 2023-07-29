import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {routes.map((item, index) => {
                        const Page = item.component;

                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
