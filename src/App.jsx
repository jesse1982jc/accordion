import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accoridion">
      {data.map((item, i) => (
        <AccordionItem
          currOpen={currOpen}
          onOpen={setCurrOpen}
          key={item.title}
          num={i}
          title={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}

      <AccordionItem
        currOpen={currOpen}
        onOpen={setCurrOpen}
        key="test 1"
        num={22}
        title="Test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ currOpen, onOpen, num, title, children }) {
  // isOpen 不是 true 就是 false
  // 先判斷 num 是否嚴格等於 currOpen，再丟給 boolean 值 給 isOpen
  const isOpen = num === currOpen;

  console.log(`isOpen: ${isOpen}`);
  console.log(`num: ${num}`);
  console.log(`currOpen: ${currOpen}`);

  // 設定一個 item 細項開關的狀態
  // 預設是 false
  // const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    // setIsOpen((prevIsOpen) => !prevIsOpen);

    // isOpen 用來判斷細項是否有打開
    onOpen(isOpen ? null : num);
  };

  return (
    <div onClick={handleToggle} className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
