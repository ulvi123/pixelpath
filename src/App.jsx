import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from './pages/CourseDetail';
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";


const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route index element={<Home />} />,
      <Route path="/courses" element={<Courses />} />,
      <Route path="/courses/:id" element={<CourseDetail />} />,
      <Route path="/blog" element={<Blog />} />,
      <Route path="/blog/:id" element={<BlogDetail />} />,
      <Route path="/testimonials" element={<Testimonials />} />,
      <Route path="/about" element={<About />} />,
      <Route path="/contact" element={<Contact />} />,
      <Route path="/faq" element={<FAQ />} />,
      <Route path="/pricing" element={<Pricing />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/register" element={<Register />} />,
      </>
  )
)

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
