const list = ['Network','Vault'];


const MenuItems = () => (
  <ul style={{textDecoration: 'none'}}>
    {list.map(item => {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);

export default MenuItems 