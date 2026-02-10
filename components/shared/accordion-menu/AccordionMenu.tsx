import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItemInterface } from "@/types/FaqTypes";
import React from "react";

interface Accordionprops {
  title: string | React.ReactNode;
  items: AccordionItemInterface[];
}

export function AccordionMenu({ items, title }: Accordionprops) {
  return (
    <div className="md:max-w-188 mx-auto p-4">
      <h3 className="text-2xl lg:text-[46px] font-medium">{title}</h3>
      <Accordion type="single" collapsible defaultValue="item-1">
        {items.map((item: AccordionItemInterface, idx: number) => (
          <AccordionItem
            key={`item-${idx}`}
            value={`item-${idx}`}
            className="pb-8 cursor-pointer"
          >
            <AccordionTrigger
              className="text-base lg:text-[22px] hover:no-underline cursor-pointer  hover:font-medium
    transition-[font-weight]"
            >
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
