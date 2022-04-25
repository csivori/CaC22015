import {Link} from 'react-router-dom';

function Pagina2({pagBack, pagFwd}) {

    function handleBtn(pag) {
      const path = `/${pag}`;
      return (<Link to={path} className="btn btn-success mx-1">Ir a {pag}</Link>);
    };

    return (
      <>
        <h1>Esta es la Pagina 2</h1>
        <hr />
        {handleBtn(pagBack)}
        {handleBtn(pagFwd)}
      </>
    );
  }
  
  export default Pagina2;