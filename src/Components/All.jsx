import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function All() {
  return (
    <div>
      <div className="grid place-items-start  pt-5 pb-32 md:place-items-center">
        <Card className="h-44 w-3/5 bg-gray-200 mb-10">
          <div className="text-3xl text-black mt-5">
            Telusuri Dengan Cepat ?
          </div>
          <div className="flex mx-52 mt-12">
            <div className="flex border border-purple-200 rounded">
              <input
                type="text"
                className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
              <Button className="px-4 text-white bg-purple-600 border-l rounded">
                Search
              </Button>
            </div>
          </div>
        </Card>
        
      </div>
    </div>
  );
}

export default All;
