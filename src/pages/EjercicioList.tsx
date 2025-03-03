import { IEjercicio, GrupoMuscular } from "../model/ejercicio";
import useFetchHook from "../hooks/useFetchHook";
import { IColumn } from "../model/column";
import AppTable from "../components/appTable";

const EjercicioList = () => {
    const { data, loading, error } = useFetchHook('https://jsonplaceholder.typicode.com/users')
    const columns: IColumn<IEjercicio>[] = [
        { key: "name", label: "Nombre" },
        { key: "description", label: "Descripción" },
        { key: "group", label: "Grupo muscular" }
    ]
    
    return (
        <>
            {
                loading ?
                    <h1>Cargando...</h1> :
                    <AppTable data={data} columns={columns} />
            }
        </>
    );
}
 
export default EjercicioList;