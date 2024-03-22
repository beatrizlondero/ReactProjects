import './App.css'
import TextExpander from './TextExpander';

function App() {
  return (
    <div>
      <TextExpander
      collapsedNumWords={10}>
        La agencia de estadísticas de Argentina publicará las cifras de 
        inflación de febrero el martes. Los economistas encuestados por 
        Bloomberg esperan que los aumentos de precios al consumidor lleguen 
        al 15% mensual, lo que continuaría con el enfriamiento frente al 21% de enero 
        y el 26% de diciembre. Sin embargo, es probable que la inflación registre 
        un incremento anual de más del 280%.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        La agencia de estadísticas de Argentina publicará las cifras de 
        inflación de febrero el martes. Los economistas encuestados por 
        Bloomberg esperan que los aumentos de precios al consumidor lleguen 
        al 15% mensual, lo que continuaría con el enfriamiento frente al 21% de enero 
        y el 26% de diciembre. Sin embargo, es probable que la inflación registre 
        un incremento anual de más del 280%.
      </TextExpander>

      <TextExpander expanded={true} 
        className="box" 
        collapsedNumWords={25}
        expandButtonText="Mostrar el resto"
        collapseButtonText="Ocultar"
        buttonColor="green"
      >
        La agencia de estadísticas de Argentina publicará las cifras de 
        inflación de febrero el martes. Los economistas encuestados por 
        Bloomberg esperan que los aumentos de precios al consumidor lleguen 
        al 15% mensual, lo que continuaría con el enfriamiento frente al 21% de enero 
        y el 26% de diciembre. Sin embargo, es probable que la inflación registre 
        un incremento anual de más del 280%.
      </TextExpander>
    </div>
  );
}




export default App
