import './taskManager.css'
import Task from './Task'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import AddTask from './AddTask'

function TaskManager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [users, setUsers] = useState([])

  /* function to get all users from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = query(collection(db, 'users'), orderBy('created', 'desc'))
    onSnapshot(taskColRef, (snapshot) => {
      setUsers(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className='taskManager'>
      <header>Task Manager</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add task +
        </button>
        <div className='taskManager__users'>

          {users.map((user) => (
            <Task
              id={user.id}
              key={user.id}
              completed={user.data.completed}
              title={user.data.title} 
              description={user.data.description}
            />
          ))}

        </div>
      </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default TaskManager
