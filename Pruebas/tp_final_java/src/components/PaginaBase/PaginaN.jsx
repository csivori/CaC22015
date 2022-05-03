import {handleBtn, getPageTitle, getPageBgColor} from './rutinasBase';

function PaginaN({numPag, pagBack, pagFwd}) {

    return (
      <>
        <div className={`container p-2 ${getPageBgColor(parseInt(numPag))}`}>
          {getPageTitle(numPag)}
          {handleBtn(pagBack)}
          {handleBtn(pagFwd)}
        </div>
      </>
    );
  }
  
  export default PaginaN;