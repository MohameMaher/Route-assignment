document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    e.preventDefault();

    let siteName = document.getElementById('siteName').value;
    let siteUrl = document.getElementById('siteUrl').value;

    if (!siteName || !siteUrl) {
        alert("Please fill in the form");
        return false;
    }

    let bookmark = {
        name: siteName,
        url: siteUrl
    };

    if (localStorage.getItem('bookmarks') === null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    document.getElementById('bookmarkForm').reset();
    fetchBookmarks();
}


function fetchBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    let bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = '';

    bookmarks.forEach((bookmark, index) => {
        bookmarkList.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${bookmark.name}</td>
            <td><a href="${bookmark.url}" class="btn btn-success" target="_blank">Visit</a></td>
            <td><button class="btn btn-danger" onclick="deleteBookmark(${index})">Delete</button></td>
        </tr>`;
    });
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
}

document.addEventListener('DOMContentLoaded', fetchBookmarks);
