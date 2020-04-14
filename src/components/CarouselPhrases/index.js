import React from 'react'

const CarouselPhrases = ( { frase, image }) => {
    const styleBlockQuoteIcon = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '-25px',
        left: '50px',
    }
    
    return(
        <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <header className="text-center pb-5">
                        <h1 className="h2">Como disse nosso senhor:</h1>
                    </header>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                        <div style={styleBlockQuoteIcon} className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                        <div className="col-sm-3 text-center">
                            <img className="rounded-circle" src={image} alt="Mclovin" style={{ width: '100px', height: '100px'}}/>
                        </div>
                        <p className="mb-0 mt-2 font-italic" style={{fontFamily: 'Roboto, sans-serif'}}>
                            "{ frase }
                            {/* <a href="/" className="text-info">@Mclovin</a> */}."
                        </p>
                        <footer className="blockquote-footer pt-4 mt-4 border-top">
                            DeusLovin
                            { /* <cite title="Source Title">Source Title</cite> */ }
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
)}

export default CarouselPhrases