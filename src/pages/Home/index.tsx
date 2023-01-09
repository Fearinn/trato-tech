import Header from "components/Header";
import styles from "./Home.module.scss";
import relogio from "assets/inicial.png";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "hooks";
import Button from "components/Button";

function Home() {
  const categories = useTypedSelector((state) => state.categories);
  const navigate = useNavigate();
  return (
    <>
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produto no melhor site do Brasil"
        image={relogio}
        className={styles.header}
      >
        <Button type="button" onClick={() => navigate("/advertise")}>Anunciar</Button>
      </Header>
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <img src={category.thumbnail} alt={category.name} />
              <h1>{category.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
