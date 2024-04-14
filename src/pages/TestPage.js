// Components
import Button from "../components/Button";
import Navbar from "../components/layout/Navbar";

function TestPage() {
  return (
    <div>
      <Navbar />
      
      <div className="mt-40">
        <Button className={"bg-red-500"} href="/register">
          Registrar-se
        </Button>
      </div>
    </div>
  );
}

export default TestPage;
