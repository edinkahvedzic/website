import { landingNavigationList } from '@edinkahvedzic/website/navigation';
export default function Index() {
  return (
    <div className="landing">
      <div className="header">
        <div className="title-wrapper">
          <span className="cover" />
          <h1 className="title">
            Edin Kahvedžić
            <span className="dot" />
          </h1>
        </div>
        <div className="description-wrapper">
          <span className="cover" />
          <p className="description">Web & mobile developer</p>
        </div>
      </div>
      <ul className="list">
        {landingNavigationList.map((item) => (
          <li key={item.id} className="item">
            <a href={item.href}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
