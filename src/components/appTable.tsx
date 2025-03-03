import { IColumn } from "../model/column";

interface ITableProps<T> {
    columns: IColumn<T>[],
    data: T[]
}

const AppTable = <T,>({ columns, data }: ITableProps<T>) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key as string} scope="col">{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data?.length > 0 ? 
                    (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column) => (
                                    <td key={column.key as string}>
                                        {column.render ? column.render(row[column.key], row) : (row[column.key] as React.ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length}>
                                No hay datos disponibles
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default AppTable;