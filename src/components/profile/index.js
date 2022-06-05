import React from 'react';
import Theme1 from './theme1';
import Theme1Bg from './theme1/theme1WithBg';
import Theme2 from './theme2';
import Theme2Bg from './theme2/theme2WithBg';
import Comic from './Comic';

const Theme = ({theme, id, data, iurl, ...props}) => {
    // theme = "Comic"
    switch(theme){
        case "Light":
        case "White":
            if(data.BackgroundImage) {
                return (<Theme1Bg data={data} id={id}/>)
            } else {
                return(<Theme1 data={data} id={id}/>)
            } 
        
        case "Dark":
            if(data.BackgroundImage) {
                return(<Theme2Bg data={data} id={id} />)
            } else {
                return(<Theme2 data={data} id={id}/>)
            } 
        
        case "Comic":
            return <Comic/>

        default:
            <React.Fragment></React.Fragment>
        
    }


    // if(theme == "Light" || theme == "White") {
    //     if(data.BackgroundImage) {
    //         return (<Theme1Bg data={data} id={id}/>)
    //     } else {
    //         return(<Theme1 data={data} id={id}/>)
    //     } 
    // } 
    // else if (theme == "Dark") {
    //     if(data.BackgroundImage) {
    //         return(<Theme2Bg data={data} id={id} />)
    //     } else {
    //         return(<Theme2 data={data} id={id}/>)
    //     } 
        
    // }
}
export default Theme;