import { ejercicio, GrupoMuscular } from "../model/ejercicio";
import useFetchHook from "../hooks/useFetchHook";

const EjercicioList = () => {
    const { data, loading, error } = useFetchHook('https://localhost:7181/ejercicios')
    
    return (
        <>
            {
                loading ?
                    <h1>Cargando...</h1> :
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Grupo muscular</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item: ejercicio) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{GrupoMuscular[item.group]}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </>
    );
}
 
export default EjercicioList;