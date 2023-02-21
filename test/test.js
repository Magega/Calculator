function calculate(){

    //search input
    const storageInput = document.getElementById('storage-input');
    const transferInput = document.getElementById('transfer-input');

    //search result, scale for desctop and mobile
    const resultOneElement = document.getElementById('result-one');
    const scaleOneElement = document.getElementById('scale-one');
    const resultOneMobileElement = document.getElementById('result-one-mobile');
    const scaleOneMobileElement = document.getElementById('scale-one-mobile');

    //search result, scale for desctop and mobile
    const resultTwoElement = document.getElementById('result-two');
    const scaleTwoElement = document.getElementById('scale-two');
    const resultTwoMobileElement = document.getElementById('result-two-mobile');
    const scaleTwoMobileElement = document.getElementById('scale-two-mobile');

    //search result, scale for desctop and mobile
    const resultThreElement = document.getElementById('result-three');
    const scaleThreeElement = document.getElementById('scale-three');
    const resultThreeMobileElement = document.getElementById('result-three-mobile');
    const scaleThreeMobileElement = document.getElementById('scale-three-mobile');
    
    //search result, scale for desctop and mobile
    const resultFourElement = document.getElementById('result-four');
    const scaleFourElement = document.getElementById('scale-four');
    const resultFourMobileElement = document.getElementById('result-four-mobile');
    const scaleFourMobileElement = document.getElementById('scale-four-mobile');

    //addEventListener for storage and transfer input
    storageInput.addEventListener('input', updateFirstResultAndScale);
    transferInput.addEventListener('input', updateFirstResultAndScale);
    
    storageInput.addEventListener('input', updateSecondtResultAndScale);
    transferInput.addEventListener('input', updateSecondtResultAndScale);

    storageInput.addEventListener('input', updateThreetResultAndScale);
    transferInput.addEventListener('input', updateThreetResultAndScale);

    storageInput.addEventListener('input', updateFourtResultAndScale);
    transferInput.addEventListener('input', updateFourtResultAndScale);

    //function for backbaze
    function updateFirstResultAndScale() {

        //create storageValue and transferValue
        const storageValue = storageInput.value;
        const transferValue = transferInput.value;
        //search width of window
        const windowWidth = window.screen.width;

        //search storageValue and transferValue
        document.getElementById('storage-value').textContent = storageValue;
		document.getElementById('transfer-value').textContent = transferValue;

        if (windowWidth > 1050) {

            //results for 1050-window
            let result = (storageValue * 0.005) + (transferValue * 0.01);

            //minimum 7
            result = Math.max(result, 7);

            //for price max 100
            resultOneElement.textContent = result.toFixed(2);

            //scale for 1050-window
            const width = Math.min((280*result)/80);
            scaleOneElement.style.width = `${width}px`

        } else {
            //results for less 1050-window
            let result = (storageValue * 0.005) + (transferValue * 0.01);

            //minimum 7
            result = Math.max(result, 7);

            //for price max 100
            resultOneMobileElement.textContent = result.toFixed(2);

            //scale for less 1050-window
            const height = Math.min((280*result)/80);
            scaleOneMobileElement.style.height = `${height}px`;
        }
    }

    //function for bunny
    function updateSecondtResultAndScale() {

        //create storageValue and transferValue
        const storageValue = storageInput.value;
        const transferValue = transferInput.value;

        //search width of window
        const windowWidth = window.screen.width;

        //search storageValue and transferValue
        document.getElementById('storage-value').textContent = storageValue;
		document.getElementById('transfer-value').textContent = transferValue;

        //var for 1050 window
        var hddssd = document.getElementById("hddssd").value;

        //var for les 1050 window
        var hddssdMobile = document.getElementById("hddssdMobile").value;

        //code for 1050 window
        if (windowWidth > 1050) {

            //code for hdd select item
            if (hddssd == "hdd") {

                //results for hdd
                let result = (storageValue * 0.01) + (transferValue * 0.01);

                //max result 10
                result = Math.min(result, 10);
                resultTwoElement.textContent = result.toFixed(2);
    
                //scale for hdd
                const width = Math.min((280*result)/80);
                scaleTwoElement.style.width = `${width}px`;
            } 

            //code for sdd select item            
            else {

                //results for sdd
                let result = (storageValue * 0.02) + (transferValue * 0.01);

                //max result 10
                result = Math.min(result, 10);
                resultTwoElement.textContent = result.toFixed(2);

                //scale for sdd    
                const width = Math.min((280*result)/80);
                scaleTwoElement.style.width = `${width}px`;
            }
        } 

        //code for less 1050 window
        else {

            //code for hdd select item
            if (hddssdMobile == "hdd") {

                //results for hdd
                let result = (storageValue * 0.01) + (transferValue * 0.01);

                //max result 10
                result = Math.min(result, 10);
                resultTwoMobileElement.textContent = result.toFixed(2);
    
                //scale for hdd 
                const height = Math.min((280*result)/80);
                scaleTwoMobileElement.style.height = `${height}px`;
            } 

            //code for sdd select item 
            else {

                //results for sdd
                let result = (storageValue * 0.02) + (transferValue * 0.01);

                //max result 10
                result = Math.min(result, 10);
                resultTwoMobileElement.textContent = result.toFixed(2);

                //scale for sdd     
                const height = Math.min((280*result)/80);
                scaleTwoMobileElement.style.height = `${height}px`;
            }
        }


    }

    //function for scaleway
    function updateThreetResultAndScale() {

        //create storageValue and transferValue
        const storageValue = storageInput.value;
        const transferValue = transferInput.value;

        //search width of window
        const windowWidth = window.screen.width;

        //search storageValue and transferValue
        document.getElementById('storage-value').textContent = storageValue;
		document.getElementById('transfer-value').textContent = transferValue;

        //var for 1050 window
        var multisingle = document.getElementById("multisingle").value;

        //var for less 1050 window
        var multisingleMobile = document.getElementById("multisingleMobile").value;

        //result for 1050 window
        if (windowWidth > 1050) {

            //result for select multi
            if (multisingle == "multi") {
                
                //result if storageValue > 75
                if (storageValue > 75){

                    //result if transferValue > 75
                    if (transferValue > 75){
                        let result = ((storageValue - 75) * 0.06) + ((transferValue - 75) * 0.02);
                        resultThreElement.textContent = result.toFixed(2);
                        
                        //scale for 1050 window
                        const width = Math.min((280*result)/80);
                        scaleThreeElement.style.width = `${width}px`;
                    } 
                    
                    //result if transferValue < 75
                    else {
                        let result = ((storageValue - 75) * 0.06);
                        resultThreElement.textContent = result.toFixed(2);
            
                        //scale for 1050 window
                        const width = Math.min((280*result)/80);
                        scaleThreeElement.style.width = `${width}px`;
                    }
                } 
                
                //result if storageValue < 75
                else {

                    //result if transferValue > 75
                    if (transferValue > 75){
                        let result =((transferValue - 75) * 0.02);
                        resultThreElement.textContent = result.toFixed(2);
                        
                        //scale for 1050 window
                        const width = Math.min((280*result)/80);
                        scaleThreeElement.style.width = `${width}px`;
                    } 
                    
                    //result if transferValue < 75
                    else {
                        let result = 0;
                        resultThreElement.textContent = result.toFixed(2);
            
                        //scale for 1050 window
                        const width = Math.min((280*result)/80);
                        scaleThreeElement.style.width = `${width}px`;
                    }
    
                }
    
            } 
            //result for select single
            else {
                if (storageValue > 75){
                    if (transferValue > 75){
                        let result = ((storageValue - 75) * 0.03) + ((transferValue - 75) * 0.02);
                        resultThreElement.textContent = result.toFixed(2);
            
                        const width = Math.min((280*result)/80);
                        scaleThreeElement.style.width = `${width}px`;
                    } else {
                        let result = ((storageValue - 75) * 0.03);
                        resultThreElement.textContent = result.toFixed(2);
            
                        const width = Math.min((280*result)/80);
                        scaleThreeElement.style.width = `${width}px`;
                    }
                } else {
                    if (transferValue > 75){
                        let result =((transferValue -75) * 0.02);
                        resultThreElement.textContent = result.toFixed(2);
            
                        const width = Math.min((280*result)/80);
                        scaleThreeElement.style.width = `${width}px`;
                    } else {
                        let result = 0;
                        resultThreElement.textContent = result.toFixed(2);
            
                        const width = Math.min((280*result)/80);
                        scaleThreeElement.style.width = `${width}px`;
                    }
    
                }
            }
        } 

        //result for less 1050 window
        else {
            if (multisingleMobile == "multi") {
                if (storageValue > 75){
                    if (transferValue > 75){
                        let result = ((storageValue - 75) * 0.06) + ((transferValue - 75) * 0.02);
                        resultThreeMobileElement.textContent = result.toFixed(2);
            
                        const height = Math.min((280*result)/80);
                        scaleThreeMobileElement.style.height = `${height}px`;
                    } else {
                        let result = ((storageValue - 75) * 0.06);
                        resultThreeMobileElement.textContent = result.toFixed(2);
            
                        const height = Math.min((280*result)/80);
                        scaleThreeMobileElement.style.height = `${height}px`;
                    }
                } else {
                    if (transferValue > 75){
                        let result =((transferValue - 75) * 0.02);
                        resultThreeMobileElement.textContent = result.toFixed(2);
            
                        const height = Math.min((280*height)/80);
                        scaleThreeMobileElement.style.width = `${height}px`;
                    } else {
                        let result = 0;
                        resultThreeMobileElement.textContent = result.toFixed(2);
            
                        const height = Math.min((280*result)/80);
                        scaleThreeMobileElement.style.height = `${height}px`;
                    }
    
                }
    
            } else {
                if (storageValue > 75){
                    if (transferValue > 75){
                        let result = ((storageValue - 75) * 0.03) + ((transferValue - 75) * 0.02);
                        resultThreeMobileElement.textContent = result.toFixed(2);
            
                        const height = Math.min((280*result)/80);
                        scaleThreeMobileElement.style.height = `${height}px`;
                    } else {
                        let result = ((storageValue - 75) * 0.03);
                        resultThreeMobileElement.textContent = result.toFixed(2);
            
                        const height = Math.min((280*result)/80);
                        scaleThreeMobileElement.style.height = `${height}px`;
                    }
                } else {
                    if (transferValue > 75){
                        let result =((transferValue -75) * 0.02);
                        resultThreeMobileElement.textContent = result.toFixed(2);
            
                        const height = Math.min((280*height)/80);
                        scaleThreeMobileElement.style.width = `${height}px`;
                    } else {
                        let result = 0;
                        resultThreeMobileElement.textContent = result.toFixed(2);
            
                        const height = Math.min((280*result)/80);
                        scaleThreeMobileElement.style.height = `${height}px`;
                    }
    
                }
            }
        }
        

    }

    //function for vultr
    function updateFourtResultAndScale() {

        //create storageValue and transferValue
        const storageValue = storageInput.value;
        const transferValue = transferInput.value;

        //search width of window
        const windowWidth = window.screen.width;

        //search storageValue and transferValue
        document.getElementById('storage-value').textContent = storageValue;
		document.getElementById('transfer-value').textContent = transferValue;

        //result for 1050 window
        if (windowWidth > 1050) {

            //result for 1050 window
            let result = (storageValue * 0.01) + (transferValue * 0.01);

            //min result
            result = Math.max(result, 5);
            resultFourElement.textContent = result.toFixed(2);

            //scale for 1050                  
            const width = Math.min((280*result)/80); // Calculate the width of the scale
            scaleFourElement.style.width = `${width}px`;

        } 

        //result for less 1050 window
        else {

            //result for less 1050 window
            let result = (storageValue * 0.01) + (transferValue * 0.01);

            //min result
            result = Math.max(result, 5);
            resultFourMobileElement.textContent = result.toFixed(2);

            //scale for less 1050             
            const height = Math.min((280*result)/80); // Calculate the width of the scale
            scaleFourMobileElement.style.height = `${height}px`;
        }
    }
}
        
calculate()
      