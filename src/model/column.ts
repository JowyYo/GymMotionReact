export interface IColumn<T> {
    key: keyof T,
    label: string,
    render?: (value: any, row: T) => React.ReactNode
}