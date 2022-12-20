import HeroSection from "./component/HeroSection";

const About = ()=>{
    const data = {
        name : "My Ecommerce site",
    }
    return ( 
        <>
        <HeroSection myData={data} />
        {/* <Services /> */}
        {/* <Trusted/> */}
        </>
        )
}
export default About;