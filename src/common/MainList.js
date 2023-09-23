import Card from "./Card";

export default function MainList() {
  return (
    <div className="main_list mw">
      <h2>Main List</h2>
      <a href="#!">View all</a>
      <ul className="__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
}
