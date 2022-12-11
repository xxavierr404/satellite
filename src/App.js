import './App.css';
import NoteList from "./components/UI/NoteList";
import AddPostButton from "./components/UI/AddPostButton";
import PostModal from "./components/UI/PostModal";
import {useState} from "react";
import NoteMenu from "./components/UI/NoteMenu";

function App() {
    const [modalActive, setModalActive] = useState(false);

  return (
      <div>
        <div className="md:grid md:grid-cols-3 md:grid-rows-none w-3/4 mx-auto my-10
        gap-6 flex flex-col ">
            <AddPostButton setModalState={setModalActive}></AddPostButton>
            <NoteList></NoteList>
        </div>
          {modalActive
              ? <PostModal setModalActive={setModalActive}></PostModal>
              : null
          }}
          {/*<NoteMenu></NoteMenu>*/}
      </div>
  );
}

export default App;
