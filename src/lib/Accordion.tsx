"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { cx } from "class-variance-authority";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <div className=" border-b-slate-200 dark:border-b-slate-700 py-1">
    <AccordionPrimitive.Item
      ref={ref}
      className={cx("transition-all", className)}
      {...props}
    />
  </div>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex data-[state=open]:bg-slate-100 ring-1 data-[state=closed]:hover:ring-2 ring-slate-200 transition-all rounded-md">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cx(
        "flex flex-1 items-center justify-between py-3 px-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <div className="text-left">{children}</div>
      <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cx(
      "overflow-hidden text-sm px-4 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up transition-all text-slate-500",
      className
    )}
    {...props}
  >
    <div className="pt-4 pb-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
