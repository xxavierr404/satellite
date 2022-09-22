import logo from './logo.svg';
import './App.css';
import NoteLoader from "./components/NoteLoader";
import AddPostButton from "./components/AddPostButton";
import PostModal from "./components/PostModal";
import {useState} from "react";

function App() {
    const [modalActive, setModalActive] = useState(false);
  return (
      <div>
        <div className="md:grid md:grid-cols-3 md:grid-rows-none w-3/4 mx-auto my-10 gap-6">
            <AddPostButton modalState={setModalActive}></AddPostButton>
            <NoteLoader></NoteLoader>
        </div>
          <PostModal modalActive={modalActive} setModalActive={setModalActive}></PostModal>
      </div>
  );
}

export default App;
