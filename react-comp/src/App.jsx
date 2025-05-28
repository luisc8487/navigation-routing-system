import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      label: "Can I use React on a Project?",
      content:
        "You can use React on any project you want. You can use React on any project you want.",
    },
    {
      label: "Can I use JavaScript on a Project?",
      content:
        "You can use React on any project you want. You can use React on any project you want.",
    },
    {
      label: "Can I use CSS on a Project?",
      content:
        "You can use React on any project you want. You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
