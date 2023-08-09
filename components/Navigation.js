import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <div className="app-name">Booking App</div>
      <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/events/create" className="nav-link">
          ADD EVENT
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

// nav {
//     display: Flex;
//     justify-content: space-between;
//     align-items: ;
//     padding: 20px;
//     background-color: #f0f0f0
//     border-bottom: 1px solid #ddd
// }

// .app-name {
//   font-size: 24px;
//   font-weight: bold;
// }

// .nav-links {
//   display: flex;
//   gap: 20px;
// }

// .nav-link {
//   text-decoration: none;
//   color: #333;
//   font-weight: bold;
//}
