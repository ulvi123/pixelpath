import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseCard from "./pages/CourseCard";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route index element={<MainLayout><Home /></MainLayout>} />,
        <Route path="/courses" element={<MainLayout><Courses/></MainLayout>} />,
        <Route path="/courses/:id" element={<MainLayout><CourseCard /></MainLayout>} />,
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />,
        <Route path="/blog/:id" element={<MainLayout><BlogDetail /></MainLayout>} />,
        <Route path="/testimonials" element={<MainLayout><Testimonials /></MainLayout>} />,
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />,
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />,
        <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />,
        <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />,
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />,
        <Route path="/register" element={<MainLayout><Register /></MainLayout>} />,
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
