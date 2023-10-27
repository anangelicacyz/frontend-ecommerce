import '../stylesheets/allproducts.css'

function PrincipalBanner(){
    return (
        <div className='bannerComp'>
            <img className= 'bannerimg' src= {require('../assets/bannerimage.png')} alt='banner' />
        </div>
    )
}

export default PrincipalBanner