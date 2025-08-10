import IkigaiTest from "./components/IkigaiTest";
import MainBrandLogo from "./components/MainBrandLogo";

function App() {
  return (
    <>
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <IkigaiTest />
    </>
  );
}

export default App;
