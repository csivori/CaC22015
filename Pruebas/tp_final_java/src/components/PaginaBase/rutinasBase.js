import {Link} from 'react-router-dom';

export const dbg = (fuente, label, valor) => {
  const msg = `[${fuente}] ${label} --> ${valor?.toString() ?? ""}`;
  console.log(msg);
  //alert(msg);
}

export const handleBtn = (pag) => {
  const path = `/${pag}`;
  return (<Link to={path} className="btn btn-success mx-1">Ir a {pag}</Link>);
};

export const getPageTitle = (numPag) => {
  return (
    <>
      <h1>Esta es la Página {numPag}</h1>
      <hr />
    </>
    );
};

export const getPageBgColor = (numPag) => {
  switch (numPag) {
    case 1: return "bg-primary";
    case 2: return "bg-secondary";
    case 3: return "bg-warning";
    default: return "bg-danger";
  }
}