const input_area = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    document.querySelector(".last_message").innerHTML = input_area.value;
});
