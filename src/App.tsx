import React, { useEffect, useState, useRef } from "react";
import "./App.scss";
import Header from "./components/Header";
import Item from "./components/Item";

interface Item {
  content: string;
  checked: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([ 
    {
      content: "First",
      checked: false
    },
    {
      content: "Second",
      checked: false
    },
    {
      content: "Third",
      checked: false
    },
    {
      content: "Fourth",
      checked: false
    }
  ]);

  /* Indices of dragged items */
  const dragItem = useRef<number>();
  const dragOverItem = useRef<number>();

  const handleOnSubmit = (e:  Event) => {
    e.preventDefault();

    const form = e.target as typeof e.target & { input: { value: string } };
    const content = form.input.value;
    if (content)
      setItems([...items, {content: content, checked: false}]);

    form.input.value = "";
  };

  const handleOnDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const handleOnDragStart = (index: number) => {
    dragItem.current = index;
  };

  const handleOnDragEnd = () => {
    if (dragItem.current == dragOverItem.current)
      return;
      
    const list: Item[] = [];
    for (let i = 0; i < items.length; ++i) {
      if (i == dragItem.current)
        continue;
      if (i == dragOverItem.current)
        list.push(items[dragItem.current!]);
      list.push(items[i]);
    }
    setItems(list);
  };

  return (
    <div className="App">
      <Header onSubmit={handleOnSubmit} />
      <ul className="items">
        {items.map((item, i) => <li 
          key={i} 
          onDragStart={() => handleOnDragStart(i)}
          onDragEnter={() => handleOnDragEnter(i)}
          onDragEnd={handleOnDragEnd}
          draggable>
          <Item 
            content={item.content.substring(0, 60)} 
            checked={item.checked}
            onRemove={() => {
              setItems(items.filter((a, b) => b !== i));
            }}
            onCheck={() => {
              setItems(items.map((o, index) => {
                if (index === i)
                  o.checked = true;
                return o;
              }));
            }}
          />
        </li>
        )}
      </ul>
    </div>
  );
}

export default App;
