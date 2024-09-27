import React from "react";
import {Tabs, Tab, Card, CardBody, Switch} from "@nextui-org/react";

export default function NotificationAlert() {
  const [isVertical, setIsVertical] = React.useState(false);
  return (
    <div className="flex flex-col px-4 md:px-8">
      <Switch className="mb-4 text-white" isSelected={isVertical} onValueChange={setIsVertical}>
        Vision
      </Switch>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" isVertical={isVertical}  variant='bordered' className='w-full'>
          <Tab key="All" title="All">
            <Card>
              <CardBody className='flex flex-col gap-4 space-y-2 text-center align-middle'>
           No Transaction Yet
           <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
   Create Coin
  </div>
</button>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Pending" title="Pending">
            <Card>
              <CardBody className='flex flex-col gap-4 space-y-2 text-center align-middle'>
             No Pending Transaction
             <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
   Create Coin
  </div>
</button>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Completed" title="Completed">
            <Card>
              <CardBody className='flex flex-col gap-4 space-y-2 text-center align-middle'>
              No Completed Transaction
              <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
   Create Coin
  </div>
</button>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Failed" title="Failed">
            <Card>
              <CardBody className='flex flex-col gap-4 space-y-2 text-center align-middle'>
              No Failed Transaction
              <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
   Create Coin
  </div>
</button>
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
