
import { PramogosItemCard } from './PramogosItemCard';


export function PramogosItemList(){
    return (
        <section className="container">
             <h1>Pramogos all lists content</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                <PramogosItemCard />
                <PramogosItemCard />
                <PramogosItemCard />
                <PramogosItemCard />
                <PramogosItemCard />
                <PramogosItemCard />
            </div>
        </section>
    );
}