export type LineItem = {
  id: string;
  invoice: string;
  itemCost: string;
  invoiceDate: string;
  deliveryDate: string;
};

export type Purchase = {
  id: string;
  status: string;
  totalSaleAmount: string;
  vendor: string;
  orderNumber: string;
  lineItems: LineItem[];
};

export type Contract = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  contractAmount: string;
  purchase: Purchase;
};
