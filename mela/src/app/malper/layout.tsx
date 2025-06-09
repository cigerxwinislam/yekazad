// Bismillahirahmanirahim 

import { Alert } from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/mmbingeh";
import AssistantRoot from "./assistant";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
<div>

<Alert variant="warning">Supports Palastina and Rojava!</Alert>
<Mmmnavbar/>

{children}
 <AssistantRoot />
<Footer/>
</div>
  );
}
