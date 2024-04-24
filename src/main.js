const Main = () => {
    return (
        <main>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    {/* Agregamos un nuevo indicador para la nueva imagen */}
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://static.mercadonegro.pe/wp-content/uploads/2023/07/31172641/McDonald%C2%B4s-nuevos-restaurantes.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
                            <h5>Restaurante Principal</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://restauracionnews.com/wp-content/uploads/2020/09/AbadiaToledo.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
                            <h5>McAuto</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/McCafe-2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
                            <h5>McCafe</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i0.wp.com/citymagazine.si/wp-content/uploads/2017/03/mcdelivery.jpg?fit=1000%2C600&ssl=1" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
                            <h5>McDelivery</h5>
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    );
}