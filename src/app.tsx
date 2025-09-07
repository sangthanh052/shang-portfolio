import RootLayout from "./components/root-layout";
import Home from "./pages/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/404";
import CVRedirect from "./pages/cv";
import Email from "./pages/send-email";
import { internal } from "./constants/urls";

const resumePaths = ["/resume", "/cv"];
const router = createBrowserRouter([
  {
    path: internal.home,
    element: <Home />,
  },
  {
    path: internal.email,
    element: <Email />,
  },
  ...resumePaths.map((path) => ({
    path: path,
    element: <CVRedirect />,
  })),
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  );
}

export default App;
