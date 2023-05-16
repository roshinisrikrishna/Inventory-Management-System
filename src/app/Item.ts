export interface Item{
    id ?: number;
    name : string;
    cost_per_item : number;
    quantity_in_stock : number;
    quantity_sold : number;
    sales ?: number | null;
    stock_date : Date;
    last_sales_date ?: Date;
}
interface SalesGraphData {
    sales_graph: string;
  }