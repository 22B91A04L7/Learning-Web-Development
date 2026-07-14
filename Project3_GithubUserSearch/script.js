const form = document.querySelector('#form')
const container = document.querySelector('#container')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        clearDetails()
        const searchUser = form.elements.query.value
        const userDetails = await getUserDetails(searchUser)
        await showUserDetails(userDetails)
        form.elements.query.value = ""
    } catch (error) {
        console.log(error)
        display.textContent = error
        return
    }
})

const getUserDetails = async (searchUser) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${searchUser}`)
        return res.data;
    }
    catch (e) {
        throw new Error("User not found..!")
    }
}

const shower = document.querySelector('#shower')

async function showUserDetails(userDetails) {
    try {
        shower.textContent = `Showing results for ${userDetails.login}`
        showAvatar(userDetails.avatar_url);
        showUserName(userDetails.login)
        showFollowerCount(userDetails.followers);
        showFollowingCount(userDetails.following);

        const respos = await getRespostories(userDetails.repos_url);
        showRepos(respos.data);
        showProfileLink(userDetails.login, userDetails.html_url);
    } catch (error) {
        console.log(error)
        return;
    }

}

const showAvatar = (avatarURL) => {
    try {
        const avatar = document.createElement('img');
        avatar.src = avatarURL
        container.append(avatar);
        return avatar
    } catch (error) {
        return error.message
    }
}
const showUserName = (username) => {
    try {
        const userName = document.createElement('h5')
        userName.textContent = `Profile : ${username}`;
        container.append(userName)
    } catch (error) {
        console.log(error)
        return;
    }
}

const showFollowerCount = (count) => {
    try {
        const followerCount = document.createElement('p');
        followerCount.textContent = `Followers : ${count}`
        container.append(followerCount)
    } catch (error) {
        console.log(error);
        return;
    }
}

const showFollowingCount = (count) => {
    try {
        const followingCount = document.createElement('p');
        followingCount.textContent = `Following : ${count}`
        container.append(followingCount)
    } catch (error) {
        console.log(error)
        return
    }
}

const getRespostories = async (url) => {
    try {
        const res = axios.get(url)
        return res;
    } catch (error) {
        return "No repositories Found"
    }
}
const reposList = document.querySelector('#reposList');
const repoHeader = document.querySelector('#repoHeader')

function showRepos(repos) {
    repoHeader.textContent = "Repositories List : "
    for (let repo of repos) {
        const newRepo = document.createElement('li');
        newRepo.append(repo.name)
        reposList.append(newRepo)
    }
}
const display = document.querySelector('#display')

function showProfileLink(user, link) {

    const profileLink = document.createElement('a')
    profileLink.href = link;
    profileLink.textContent = `Visit ${user} GitHub`
    profileLink.target = '_blank'
    display.append(profileLink)

}

function clearDetails() {

    container.innerHTML = "";
    reposList.innerHTML = "";
    repoHeader.textContent = "";
    shower.textContent = "";
    display.innerHTML = "";
}