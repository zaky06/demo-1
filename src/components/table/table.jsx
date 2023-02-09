import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

function DarkTable() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Языки</th>
          <th>Шкала умений</th>
          <th>Циф.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <th>HTML</th>
          <td>
            <ProgressBar animated now={90} />
          </td>
          <td>9 / 10</td>
        </tr>
        <tr>
          <td>2</td>
          <th>CSS</th>
          <td>
            <ProgressBar animated now={70} />
          </td>
          <td>7 / 10</td>
        </tr>
        <tr>
          <td>3</td>
          <th>JS</th>
          <td>
            <ProgressBar animated now={50} />
          </td>
          <td>5 / 10</td>
        </tr>
        <tr>
          <td>4</td>
          <th>React</th>
          <td>
            <ProgressBar animated now={50} />
          </td>
          <td>5 / 10</td>
        </tr>
        <tr>
          <td>5</td>
          <th>Bootstrap</th>
          <td>
            <ProgressBar animated now={70} />
          </td>
          <td>7 / 10</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DarkTable;