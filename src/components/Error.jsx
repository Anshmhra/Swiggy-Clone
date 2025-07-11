import { useRouteError } from "react-router-dom";

function Error(){


      const error = useRouteError();
  console.error(error);

    return <div>
        <h2>{error.statusText}:{error.status}</h2>
        <h3>{error.data}</h3>
     
        </div>
}
export default Error;    