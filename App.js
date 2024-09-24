import "./assets/css/stile.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import PostByCategoryPage from "./pages/PostByCategoryPage";
import SM_DANCEPage from "./pages/SM_DANCEPage";
import MapPage from "./pages/MapPage";
import { Routes, Route } from "react-router-dom";
import TeachersPage from "./pages/TeachersPage";
import PricePage from "./pages/PricePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/posts/:id" element={<PostByCategoryPage />} />
          <Route path="/sm_dance" element={<SM_DANCEPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/price" element={<PricePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
