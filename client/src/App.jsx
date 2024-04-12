import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicLayout } from "./components/layout/BasicLayout";
import { Page404 } from "./components/pages/Page404";
import { PageHome } from "./components/pages/PageHome";
import { PagePramogos } from "./components/pages/PagePramogos";
import { PageGyvunams } from "./components/pages/PageGyvunams";
import { PagePramogosItem } from "./components/pramogos-item-list/PagePramogosItem";
import { PageVaizdoZaidimai } from "./components/pamogos-vaizdozaidimai/PageVaizdoZaidimai";
import { PageVaizdoZaidimaiItem } from "./components/pamogos-vaizdozaidimai/PageVaizdoZaidimaiItem";
import { PageKnygos } from "./components/pramogos-knygos/PageKnygos";
import { PageKnygosItem } from "./components/pramogos-knygos/PageKnygosItem";

 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={BasicLayout}>
          <Route index path='/' element={<PageHome />} />
          {/* <Route path='/moterims' element={<></>} />
          <Route path='/vyrams' element={<></>} />
          <Route path='/vaikams' element={<></>} />
          <Route path='/namams' element={<></>} /> */}
          <Route path='/pramogos' element={<PagePramogos />} />
          <Route path='/pramogos/:id' element={<PagePramogosItem />} />
          <Route path='/pramogos/vaizdo-zaidimai' element={<PageVaizdoZaidimai />} />
          <Route path='/pramogos/vaizdo-zaidimai/:id' element={<PageVaizdoZaidimaiItem />} />
          <Route path='/pramogos/knygos' element={<PageKnygos />} />
          <Route path='/pramogos/knygos/:id' element={<PageKnygosItem />} />
          <Route path='/gyvunams' element={<PageGyvunams />} />
          {/* <Route path='/apie-mus' element={<></>} />
          <Route path='/musu-platforma' element={<></>} /> */}
          <Route path='*' element={<Page404 />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;