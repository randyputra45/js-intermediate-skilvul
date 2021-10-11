const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (username) => {
    try {
        const user = await fetch(`https://api.github.com/users/${username}`);
        const json = await user.json()
        const userData = await json;
        if (!username) {
            return null
        }
        else if (userData.login) {
            return userData;
        }
    } catch (e) {
        console.log(e);
    }
    return "not found";
}

elFormUsername.onsubmit = async (e) => {
    e.preventDefault();
    let form = document.querySelector('form[id="form-username"]');
    let getValue = form.elements['username'].value;
    let res = await getGitHubUser(getValue)
    console.log(getValue);

    if (res.login) {
        elCardImg.classList.remove("d-none")
        elCard.classList.remove("d-none")
        elCardBtn.classList.remove("d-none")
        elCardTitle.innerText = res.login
        elCardImg.src = res.avatar_url
        elCardBtn.href = res.html_url
    }
    else {
        elCardImg.classList.add("d-none")
        elCardBtn.classList.add("d-none")
        elCardTitle.innerText = "Not Found";
    }
};