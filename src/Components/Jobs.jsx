import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from 'dateformat';

export default function Jobs() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)
  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts`).then((res) => {
      console.log(res);
      setData(res.data.data);
      setLoading(false);
    });
  }, []);

  if (loading && data.length === 0) {
    return (
      <Loading />
    )
  }

  return (
    <div className="grid grid-cols-3 gap-4 mt-20 -mb-56 mx-auto place-items-center">
      {currentPosts.map((item, index) => (
        <Card className="rounded-none mt-6 w-80 " key={index}>
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={item.image} alt="" className="h-full" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            {item.title}
            </Typography>
            <Typography>
              {item.category} | {dateFormat(item.updated_at, "dd mmm yyyy")}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 ">
            <Link to={`/artikel/${item.title}/${item.id}`}>
            <Button className="transition ease-in-out delay-150">Baca Selengkapnya</Button></Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}