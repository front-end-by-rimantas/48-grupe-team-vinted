import { KnygosCard } from "./KnygosCard";



export function PageKnygos() {
    return (
        <>
              <section className="container">
                    <h1>Knygu page list</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                    <KnygosCard />
                    <KnygosCard />
                </div>
            </section>
        </>
    );
}