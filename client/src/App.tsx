// import LogTable from "./component/LogTable";
import Search from "./component/LogForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LogTable from "./component/LogTable";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const queryClient = new QueryClient();

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <LogTable />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
