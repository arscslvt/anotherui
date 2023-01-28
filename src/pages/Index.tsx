import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/AlertDialog";
import { Button } from "../components/Button";

export const Index = () => {
  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex gap-4">
        <Button>Button</Button>
        <Button variant={"outline"}>Button</Button>
        <Button variant={"transparent"}>Button</Button>
      </div>
      <div>
        <Accordion type="single" collapsible={true}>
          <AccordionItem value="d1">
            <AccordionTrigger>What's this about?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              impedit earum perferendis hic consectetur odit, unde architecto,
              in nihil suscipit voluptatum sit eveniet repudiandae! Totam quidem
              amet culpa similique doloribus?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="d2">
            <AccordionTrigger>How can I join?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at
              inventore expedita excepturi ex dolores assumenda pariatur enim
              nam! Ducimus, voluptate! Repellat nostrum hic non natus quod
              distinctio exercitationem amet!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="d3">
            <AccordionTrigger>Is it free to get?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae impedit in perspiciatis a non natus, maxime, fugiat
              quidem repellat qui alias veniam corporis, quae consequuntur
              distinctio aut cum. Rem, porro!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="!bg-slate-900 !text-white !ring-0 flex items-center gap-2">
              <ArrowTopRightOnSquareIcon className="w-4 h-4 " />
              Open Dialog
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>How it works?</AlertDialogTitle>
            <AlertDialogDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium neque sequi assumenda amet dolore dolorum aliquid aut
              rerum. Illo beatae et nostrum at magni eius eveniet ipsa iure
              quasi odit.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Dismiss</AlertDialogCancel>
              <AlertDialogAction onClick={() => alert("You clicked!")}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
