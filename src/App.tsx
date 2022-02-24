import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { Toaster } from 'react-hot-toast';
import './styles/global.scss';




export function App() {
  return (
    <>
      <Header />
      <TaskList />
      <Toaster
        position="top-right"
      />
    </>
  )
}