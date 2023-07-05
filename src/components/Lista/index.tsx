import style from './Lista.module.scss';
import Item from '../Lista/item/index';
import { ITarefa } from '../../types/tarefa';


function Lista({tarefas}:{tarefas: ITarefa[]}) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
              {tarefas.map((item, i)=>(
                <Item key={i}
                  {...item}
                />
                ))}
            </ul>
        </aside>
        )
}
export default Lista;