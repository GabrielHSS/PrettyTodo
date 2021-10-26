import { useState } from 'react'
import {
  AddButon,
  Card,
  ListItem,
  ModalWrapper,
  Wrapper,
  ModalCard,
  StyledInput
} from './styles'

type ModalProps = {
  handleAddTask: (task: string) => void
}

const Modal = ({ handleAddTask }: ModalProps): JSX.Element => {
  const [task, setTask] = useState('')
  return (
    <ModalWrapper>
      <ModalCard>
        <StyledInput htmlFor="new-task">
          <span className="input-label">Digite o nome da nova task</span>
          <div className="input-container">
            <input
              onChange={event => setTask(event.target.value)}
              id="new-task"
              type="text"
            />
          </div>
        </StyledInput>
        <button className="form-button" onClick={() => handleAddTask(task)}>
          Adicionar
        </button>
      </ModalCard>
    </ModalWrapper>
  )
}
type TaskProps = {
  name: string
  handleRemoveTask: (task: string) => void
}
const TaskItem = ({ name, handleRemoveTask }: TaskProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  return (
    <ListItem>
      <label className="checkbox-wrapper" htmlFor={name}>
        <input
          id={name}
          type={'checkbox'}
          onChange={event => setIsChecked(event.target.checked)}
        ></input>
        <span className="checkbox-inner" />
        <span className="checkbox-label">{name}</span>
      </label>
      {isChecked && (
        <p className="delete-icon" onClick={() => handleRemoveTask(name)}>
          ✘
        </p>
      )}
    </ListItem>
  )
}

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Array<string>>([])
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false)

  const handleModal = () => {
    setIsVisibleModal(!isVisibleModal)
  }
  const handleAddTask = (task: string) => {
    tasks.push(task)
    setTasks(tasks)
    setIsVisibleModal(!isVisibleModal)
  }
  const handleRemoveTask = (task: string) => {
    setTasks(tasks.splice(tasks.indexOf(task) + 1, 1))
  }
  return (
    <Wrapper>
      <Card>
        <p className="title">Pretty To-Do</p>

        {tasks.length > 0 ? (
          tasks.map((task: string, key: number) => {
            return (
              <TaskItem
                handleRemoveTask={handleRemoveTask}
                name={task}
                key={key}
              />
            )
          })
        ) : (
          <p className="no-task-label">Você não possui tasks no momento :)</p>
        )}

        <AddButon onClick={handleModal} />
      </Card>
      {isVisibleModal && <Modal handleAddTask={handleAddTask} />}
    </Wrapper>
  )
}

export default App
