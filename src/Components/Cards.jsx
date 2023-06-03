import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
 
export default function Cards() {
  return (
    <div>
    <Card className=" mx-auto mb-40 flex-row w-full max-w-[70rem]">
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
          alt="image" 
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue" className="uppercase mb-4">startups</Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="font-normal mb-8">
          Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More 
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardBody>
    </Card>
    <div className="mt-5">
    </div>
  </div>
  );
}