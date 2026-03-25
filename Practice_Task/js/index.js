
        document.getElementById('btn').addEventListener('click', () => {
            inputText = document.getElementById('text').value;

            textLength = inputText.length;
            textTotalWords = inputText.trim().split(" ").length;
            //reversedText=inputText.split("").reverse().join("");
            //reverse string using loop
            let reversedText = "";
            for (let i = inputText.length - 1; i >= 0; i--) {
                reversedText += inputText[i]
            }
            document.getElementById('show_div').innerHTML = `
            
            <div>
             <h2> Your analyzed text: </h2>
             <p>Total length of your text is: ${textLength} </p>
             <p>Total word of your text is : ${textTotalWords} </p>
             <p>Reverse string : ${reversedText} </p>
            
            <div>
            
            `

        })

   
