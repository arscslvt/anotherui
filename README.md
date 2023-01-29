# AnotherUI

Clean and minimal **Radix UI** and **Tailwind CSS** components.

> **Warning**
> These are a work in progress components. I'm pushing it publicly because I want you to see all my progress.

---
## Get started
Follow instructions on [Another UI template docs](https://github.com/arscslvt/anotherui-app-template).

---

## Example

### Accordion Component

A vertically stacked set of interactive headings that each reveal an associated section of content.

### Props

| Prop        | Type    | Default | Description                                                                                                       |
| ----------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| type        | enum    | -       | Determines whether one or multiple items can be opened at the same time.                                          |
| value       | string  | -       | The controlled value of the item to expand when type is "single". Must be used in conjunction with onValueChange. |
| collapsible | boolean | false   | When type is "single", allows closing content when clicking trigger for an open item.                             |
| ...         |         |         | View full documentation on [Radix UI Docs](https://www.radix-ui.com/docs/primitives/components/accordion)         |

## Getting started

```jsx
import { Accordion } from "@anotherui/accordion";

function Example() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="1">
        <AccordionTrigger>Item title 1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          impedit earum perferendis hic consectetur odit, unde architecto.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="2">
        <AccordionTrigger>Item title 2</AccordionTrigger>
        <AccordionContent>
          A at inventore expedita excepturi ex dolores assumenda pariatur enim
          nam!
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="3">
        <AccordionTrigger>Item title 3</AccordionTrigger>
        <AccordionContent>
          Repudiandae impedit in perspiciatis a non natus, maxime, fugiat quidem
          repellat qui alias veniam corporis.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

---

**This will be available via npm packages.**
