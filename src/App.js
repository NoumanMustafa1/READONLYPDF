import './App.css';
import PDF from "./Data_warehouse_Building_Blocks.pdf";
function App() {
  return (
    <div className="App">
      <embed src={PDF + '#toolbar=0'} type="application/pdf"
        height={800}
        width={1200}
      />

    </div>
  );
}

export default App;
