import React from "react";
import { useSelector } from "react-redux";


const Create = () => {
    const mData = useSelector(({ contact: { data } }) => data);

    return (
        <div>Contatos {mData.lenght}

        </div>        
    );
  };

  export default Create;