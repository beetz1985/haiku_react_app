import haikuData from '../Data/ApiData'
import Haikus from './Haikus'

function MainContent(){

 
    const haiku_PreComponents = haikuData.map((v)=>{
        return <Haikus title={v.title} author={v.author} haiku={v.haiku}/>
    });

    
    return (
        <>
        <h1>Haikus Of The World</h1>
        <main className="main-content">
            
            {haiku_PreComponents}
        </main>
        </>
    )
}

export default MainContent