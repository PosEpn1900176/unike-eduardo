export const filterByStatus = (data = [], status) => {
  return data.filter(item => item.StatusPedido === status);
};
