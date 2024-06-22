
window.addEventListener('load', function () {


    body = this.document.querySelector("body");

    cat_images = fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng",
        { method: "GET" }
    ).then(
        (response) => { return response.json() }
    ).then(
        (cat_data) => {

            // console.log(cat_data);
            // const new_image = this.document.createElement("img");

            cat_data.forEach(cat_element => {

                // console.log(cat_element.url);
                const new_image = this.document.createElement("img");
                new_image.setAttribute('src', cat_element.url);
                new_image.classList.add('spin-cat');
                new_image.style.setProperty("animation-duration", String((Math.random() + 0.2) * 5500) + "ms");
                var size = (Math.random() + .1) * 300;
                new_image.style.setProperty("width", size + "px");
                new_image.style.setProperty("height", size + "px");

                body.appendChild(new_image);

            });

        }
    )





















})