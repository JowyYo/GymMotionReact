import AppTable from "../components/appTable";
import useFetchHook from "../hooks/useFetchHook";
import { IColumn } from "../model/column";
import { IUser } from "../model/user";

const UsersList = () => {
    const { data, loading, error } = useFetchHook('https://jsonplaceholder.typicode.com/users')
    const columns: IColumn<IUser>[] = [
        { key: "name", label: "Nombre" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Teléfono" }
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
 
export default UsersList;