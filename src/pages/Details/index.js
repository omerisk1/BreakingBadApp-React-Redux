import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();
  console.log(char);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false))
  }, [char_id]);

  return (
    <div>
      {loading && <div style={{textAlign: 'center'}}>Loading...</div>}
      {char && (
        <div className="charDetail">
          <h1>{char.name}</h1>
          <img src={char.img} alt="" style={{width: '50%'}} />
        </div>
      )}
      {char && <pre style={{textAlign: 'center'}}>{JSON.stringify(char,null,2)}</pre>}
    </div>
  );
}

export default Detail;
