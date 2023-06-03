import { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import nl2br from "react-nl2br";
import axios from "axios";
function Detail() {
  const {id}=   useParams();
   
  const [inputs, setInputs] = useState([]);
   
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
  }
  
  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get('http://127.0.0.1:8000/api/posts/'+id).then(function(response) {
      console.log(response);
      setInputs(response.data.data);
  });
  }, [id]);
  return (
    <div className="overflow-hidden">
      <div className="aww" />
      <div className=" mx-auto top-72 right-0 left-64 bg-gray-100 max-w-5xl">
        <div className="p-10">
          <div className="absolute mx-auto top-72 pt-14 right-32 left-32 h-52 bg-gray-100 max-w-5xl">
            <h1 className="font-bold text-5xl mb-6">{inputs.title}</h1>
          </div>
          <img src={inputs.image} className="mx-auto  mb-10"></img>
          <p className="text-justify text-sm">
          {nl2br(inputs.content)}
          </p>
        </div>
      </div>
      <div>
        <h1>Maps</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.13800209534804!2d110.37206537397547!3d-7.839323117285336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a565367618551%3A0x603be9c84c1f2504!2sJl.%20Tj.%20Nila%2C%20Tarudan%2C%20Bangunharjo%2C%20Kec.%20Sewon%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1684427240749!5m2!1sid!2sid"
          width="300"
          height="150"
          allowfullscreen
        />
      </div>
    </div>
  );
}

export default Detail;
