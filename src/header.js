import feather from 'feather-icons';
import React from 'react';

const Header = () => {
    React.useEffect(() => {
        feather.replace();
    }, []);

    return (
        <header>
            <h1 style={{ textAlign: 'center', fontSize: '2em' }}>McDonald's</h1>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <i data-feather="search"></i> 
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;