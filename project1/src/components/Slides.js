import React,{ useEffect, useState} from 'react';

function Slides({slides}) {

    //react hook
    const [slide,setSlide] = useState(0);

    //like didmount
    useEffect(()=>{
        let btns = document.querySelectorAll('button'); 
        if(slide===0){
           btns[2].disabled=false
            btns[1].disabled=true
            btns[0].disabled=true
        }
    })

    function handleSubmitSlides(event){
        let buttonAction = event.target.getAttribute('data-testid');
        let btns = document.querySelectorAll('button'); 
        btns[0].disabled=false
        if(buttonAction === 'button-next'){
            // console.log(`slides ${slide}`)
            // console.log(`slides.length ${slides.length}`)  
            setSlide(slide+1)  
            if(slide+2 >= slides.length){
                btns[2].disabled=true
                btns[1].disabled=false
            }else{
                btns[1].disabled=false
            }
        }
        else if(buttonAction === 'button-prev'){
            // console.log(`slides minus ${slide}`)
            setSlide(slide-1)

            if(slide-1 <= 0){
                btns[2].disabled=false
                btns[1].disabled=true
            }else{
                btns[2].disabled=false
            }
        }
        else{
            btns[2].disabled=false
            btns[1].disabled=true
            return setSlide(slide-slide)
        }
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={e=>handleSubmitSlides(e)}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={e=>handleSubmitSlides(e)}>Prev</button>
                <button data-testid="button-next" className="small" onClick={e=>handleSubmitSlides(e)}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                {
                    <div>
                        <h1 data-testid="title">{slides[slide].title}</h1>
                        <p data-testid="text">{slides[slide].text}</p>
                    </div>
                   
                }
            </div>
        </div>
    );

}

export default Slides;
