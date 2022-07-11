import  { useState } from 'react';
import * as C from './App.styles';
import {Item} from  './types/Item';
import {ListItem} from './components/ListItens/index';
import {AddArea} from './components/AddArea/'


const App = () => {
const [list, setList] = useState<Item[]>([

]);

const handleAddTask = (taskName: string) => {
let newlist = [...list];
newlist.push({
  id: list.length +1,
  name: taskName,
  done : false

});
setList(newlist);
}

  return(

<C.Container>
  <C.Area>
    <C.Header>Lista de Tarefas</C.Header>

<AddArea onEnter = {handleAddTask} />

{list.map((item, index)=>(<ListItem key = {index} item={item}
/>))}


  </C.Area>
</C.Container>
);
}

export default App;