import Link from "next/link";

const NAV_ITEMS = ["dialog", "dialog-double", "dialog-horizon"];

export function NavBar() {
  return (
    <ul style={styles.container}>
      {NAV_ITEMS.map((item) => (
        <li key={item} style={styles.item}>
          <Link href={`/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    fontWeight: "bold",
    paddingTop: "20px",
    paddingLeft: "10px",
  },
  item: {
    margin: "0 10px 0 0",
  },
};
