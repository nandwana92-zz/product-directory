export default() => {
  return (items, s) => {
    return items.filter(item => item.name.toLowerCase().includes(s.toLowerCase()));
  };
};
