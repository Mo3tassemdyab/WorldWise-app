import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

import AppLayout from "./Pages/AppLayout";
import PageNotFound from "./Pages/PageNotFound";
import Pricing from "./Pages/Pricing.JSX";
import Login from "./Pages/Login";
import ProductPage from "./Pages/ProductPage";
import CityList from "./Components/CityList";
import City from "./Components/City";
import CountriesList from "./Components/CountriesList";
import Form from "./Components/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";
import { AuthProvider } from "./Contexts/FakeAuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";

export default function App() {
  return (
   
      <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="productpage" element={<ProductPage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<ProtectedRoute> <AppLayout /> </ProtectedRoute>}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
      </AuthProvider>
   
  );
}
