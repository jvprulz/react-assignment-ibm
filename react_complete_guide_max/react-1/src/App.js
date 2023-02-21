import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'id1',
      title: 'Mobile',
      amount: 1500,
      date: new Date(2023, 2, 10),
    },
    { id: 'id2', title: 'Laptop', amount: 3000, date: new Date(2023, 3, 10) },
    {
      id: 'id3',
      title: 'Bike',
      amount: 4500.55,
      date: new Date(2023, 4, 10),
    },
    {
      id: 'id4',
      title: 'Car',
      amount: 9000,
      date: new Date(2023, 5, 10),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
