import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import marketData from "./data";

function Market() {
  const { data } = JSON.parse(marketData);
  console.log(data);

  return (
    <Layout>
      <Container>
        <h1 className="font-size-500 text--center">Market Rate</h1>
        <table>
          <thead>
            <tr>
              <th>Index No</th>
              <th>Commodity</th>
              <th>Minimum Support Prices - 2022-23</th>
              <th>Minimum Support Prices - 2023-24</th>
              <th>Absolute Increase in 2023-24 over Previous Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]} rupees</td>
                <td>{item[3]} rupees</td>
                <td>{item[4]} rupees</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Layout>
  );
}

export default Market;
