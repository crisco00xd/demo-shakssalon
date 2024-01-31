export default function BurgerMenu(toggleNav) {
  return (
    <>
      <button onClick={toggleNav} className="burger-menu">
        <List size={32} color="Black" />
      </button>
    </>
  );
}
