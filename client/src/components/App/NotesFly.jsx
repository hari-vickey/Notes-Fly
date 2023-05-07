import Footer from './utils/Footer';
import NoteBook from './Notes/NoteBook';
import Navbar from './utils/NavBar';
import TodoList from './Todo/TodoList';

export default function NotesFly(props) {
  return (
    <div className='page'>
      <Navbar username={props.user}/>
      <div className='row'>
        <div className='col-auto'>
          <TodoList id={props.mail} />
        </div>
        <div className='col'>
          <div className='row'>
            <NoteBook id={props.mail} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
