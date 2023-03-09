import Navbar from './Navbar';

export default function Header({ setPage }) {
  return (
    <div>
      <header class="container-fluid">
        <Navbar setPage={setPage} />
      </header>
    </div>
  );
}
