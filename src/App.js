import logo from './logo.svg';
import './App.css';
import { UserList } from './containers/UserList';
import { useDispatch } from 'react-redux';
import { getAllUsers } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-3xl text-center py-2 font-bold underline">
        User App
      </h1>
      <div className='justify-center items-center flex flex-col py-3'>
        <h3>Click on button to load all users</h3>
        <div>
          <button onClick={() => dispatch(getAllUsers())} data-test-id="LoadUsers" className='bg-slate-600 text-white rounded p-1 text-sm'>Click to load all users</button>
        </div>
      </div>
      <UserList />
    </div>
  );
}

export default App;
