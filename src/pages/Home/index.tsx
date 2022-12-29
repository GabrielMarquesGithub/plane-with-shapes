import { TiArrowBack, TiArrowForward } from "react-icons/ti";

import { Header } from "./styles";

import ShapeContainer from "../../components/ShapeContainer";

const Home = () => {
  return (
    <>
      <Header>
        <h1>Adicione Formas!</h1>

        <ul>
          <li>
            <TiArrowBack />
            Control + Z
          </li>
          <li>
            <TiArrowForward />
            Control + Y
          </li>
        </ul>
      </Header>
      <ShapeContainer />
    </>
  );
};

export default Home;
