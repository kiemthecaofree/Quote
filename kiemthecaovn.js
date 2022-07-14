    var time = 91;
    const btn_get_code = document.querySelector("#btn_get_code");
    const remove_get_code = document.querySelector("#remove_get_code");
    var get_code = document.querySelector(".get_code");
    let interval;
    const getMaTheCao = async () =>{
        let data = new FormData();
        data.append('ma_code', 'ma_code');
        data.append('btn_submit', 'btn_submit');
        const apiUrl = "https://magioithieu.net/thecao.php";
        try{
            const response = await fetch(apiUrl, {
                 body: data,
                 method: 'POST',
            });
    
            apiQuote = await response.json();
            get_code.innerHTML = apiQuote;
        }catch(err) {}
    }
     const codePro = () => {
        btn_get_code.removeEventListener("click", codePro);
        const changeTime = () =>{
            time -- ;
                if(time === -1){
                    clearInterval(interval);
                    getMaTheCao();
                    btn_get_code.addEventListener("click", codePro);
                    time = 91;
                    return;
                }
                get_code.innerHTML = "Vui lòng đợi "+time +" s";
            }
            interval = setInterval(changeTime, 1000)
    }
    btn_get_code.addEventListener("click", codePro);

    remove_get_code.addEventListener("click", () => {
        get_code.remove();
    });
