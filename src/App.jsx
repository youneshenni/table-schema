import Table from "./Table";

const data = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "johmdoe@gmail.com",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Doe",
    email: "janedoe@gmail.com",
  },
  {
    id: 3,
    first_name: "John",
    last_name: "Smith",
  },
];

const schema = {
  first_name: {
    label: "First Name",
    type: "text",
  },
  last_name: {
    label: "Last Name",
    type: "text",
  },
  email: {
    label: "Email",
    type: "email",
  },
};

function App() {
  return <Table data={data} schema={schema} />;
}

export default App;
