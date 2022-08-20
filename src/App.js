import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div
      className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
    >
      {/* <!-- navbar --> */}

      <Navbar />
      <div className="w-full max-w-4xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <Header />
        <hr className="mt-4" />

        {/* <!-- todo list --> */}
        <TodoList />

        <hr className="mt-4" />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
