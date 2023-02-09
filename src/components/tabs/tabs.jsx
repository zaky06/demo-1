import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function MyTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="html" title="HTML">
        <p>HTML знаю очень хорошо, умею верстать семантически правильно, применять разные теги по назначению. Адаптивная верстка.</p>
      </Tab>
      <Tab eventKey="css" title="CSS">
        <p>CSS у меня на достаточно хорошем уровне, владею как Flexbox так и Grid, правда Flexbox знаю куда лучше, просто с Grid не так много верстал. Умею делать адаптивные стили, из минусов - плохо знаком с анимациями</p>
      </Tab>
      <Tab eventKey="js" title="JS">
        <p>JS у меня на начальном уровне, знаю основы: переменные, типы данных, функции, методы массивов. Решаю задачки на codewars 8 kyu - 7kyu. Буду прогрессировать)</p>
      </Tab>
      <Tab eventKey="react" title="React">
        <p>React тоже начального уровня, могу спокойно создавать такие сайтики, понимаю принцып работы и в чем смысл компонентого подохода, так-же владею пропсами, умею проверять их типы</p>
      </Tab>
      <Tab eventKey="bootstrap" title="Bootstrap">
        <p>С подключениями библиотек уже более менее разобрался, в этом проекте тоже без них не обошлось, конечно еще бывают случаи когда что-то идет не поп плану</p>
      </Tab>
    </Tabs>
  );
}

export default MyTab;