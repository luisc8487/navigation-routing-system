import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "asdfk",
      label: "Can I use React on a Project?",
      content:
        "You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "dskfn",
      label: "Can I use JavaScript on a Project?",
      content:
        "You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "enfonr",
      label: "Can I use CSS on a Project?",
      content:
        "You can use React on any project you want. You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
