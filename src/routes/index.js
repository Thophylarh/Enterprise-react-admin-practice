import { createBrowserRouter } from "react-router-dom";




import Layout from "../components/layout";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Contacts from "../scenes/contacts";
import Invoices from "../scenes/invoices";
import Form from "../scenes/form";
import FAQ from "../scenes/faq";
import { Bar } from "@nivo/bar";
import { Pie } from "@nivo/pie";
import Line from "../scenes/line";
import Geography from "../scenes/geography";


const router = createBrowserRouter([
    {
      path: "/",
    //   errorElement: <ErrorPage />,
      hasErrorBoundary: true,
      children: [
       
  
        {
          element: <Layout />,
          children: [
            { index: true, element: <Dashboard />, path: "/" },
            { element: <Team />, path: "/team" },
            { element: <Contacts />, path: "/contacts" },
            { element: <Invoices />, path: "/invoices" },
            { element: <Form />, path: "/form" },
            { element: <FAQ/>, path: "/faq" },
            { element: <Bar />, path: "/bar-chart" },
            { element: <Pie />, path: "/pie-chart" },
            { element: <Line />, path: "/line-chart" },
            { element: <Geography/>, path: "/geo-chart" },
          ],
        },
      ],
    },
    {
      path: "*",
    //   element: <NotFound />, 
    },
  ]);

export default router;
