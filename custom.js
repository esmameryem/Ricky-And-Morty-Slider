let url = "https://rickandmortyapi.com/api/character";
    let characters = [];
    let getData = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                characters = data.results;
                createSlider();
            });
    };
    let createSlider = () => {
        let slides = "";
        characters.forEach((character) => {
            slides += `
            <div class="slide" >
                <img src="${character.image}" alt="${character.name}">
                <div class="details">
                    <h2>${character.name}</h2>
                    <p>Gender: ${character.gender}</p>
                    <p>Status: ${character.status}</p>
                </div>
            </div>
            `;
        });
        $("#slides").html(slides);
    
        let currentIndex = 0;
        let slideCount = $(".slide").length;
        $(".prev").on("click", () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = slideCount - 3;
            }
            $(".slide").hide();
            $(`.slide:eq(${currentIndex})`).show();
        });
        $(".next").on("click", () => {
            currentIndex++;
            if (currentIndex >= slideCount) {
                currentIndex = 0;
            }
            $(".slide").hide();
            $(`.slide:eq(${currentIndex})`).show();
        });
        $(".slide").hide();
        $(`.slide:eq(0)`).show();
    };
    getData();
