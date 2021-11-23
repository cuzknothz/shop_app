export const addItemToCart = (items: any, itemToAdd: any) => {
  const isExistItem = items.find((i: any) => i.id === itemToAdd.id);
  if (isExistItem) {
    return items.map((i: any) =>
      i.id === itemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const deleteItem = (items: any, itemToDelete: any) => {
  return items.filter((i: any) => i.id !== itemToDelete.id);
};
