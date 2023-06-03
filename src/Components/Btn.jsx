import { Button } from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
 
export default function Btn() {
  const navigate = useNavigate();
  return (
    <div className="mt-80 ">
      <Button variant="text" className=" text-textColor flex items-center gap-2 mx-auto h-auto w-auto text-xl" onClick={() => navigate("/Review")}>
        Tampilkan Semua <ArrowLongRightIcon strokeWidth={2} className="h-7 w-7" />
      </Button>
    </div>
  );
}